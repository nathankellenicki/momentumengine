"use strict";

import Entity from "./entity.js";
import Vector2D from "./vector2d.js";

import KeyboardInput from "./keyboardinput.js";
import GamepadInput from "./gamepadinput.js";

class Game extends Entity {


    constructor (config) {

        super(); // Call entity constructor
        config = config || {};
        config.fullscreen = config.fullscreen || {};
        config.inputs = config.inputs || {};


        // Required params
        if (config.canvas) {
            this.canvas = config.canvas;
        } else {
            throw new Error("MomentumEngine.Classes.Game must be constructed with a canvas");
        }

        if (config.width) {
            this.width = config.width;
        } else {
            throw new Error("MomentumEngine.Classes.Game must be constructed with canvas width");
        }

        if (config.height) {
            this.height = config.height;
        } else {
            throw new Error("MomentumEngine.Classes.Game must be constructed with canvas height");
        }

        this.scale = 1;

        // Optional params
        this.desiredFps = config.desiredFps || 60;
        this.fixFrameRate = !!config.fixFrameRate;

        this.fullScreenNativeResolution = !!config.fullscreen.nativeResolution;

        if (config.fixRatio) {

            let deviceRatio = window.devicePixelRatio,
                backingStoreRatio = 0;

            // Unfortunately Ejecta requires calling getContext last, so we cannot get the backingStorePixelRatio. So for Ejecta's case, we set it to 1, and call getContext later.
            if (typeof ejecta !== "undefined") {
                backingStoreRatio = 1;
            } else {

                this.context = this.canvas.getContext("2d");

                backingStoreRatio = this.context.webkitBackingStorePixelRatio ||
                    this.context.mozBackingStorePixelRatio ||
                    this.context.msBackingStorePixelRatio ||
                    this.context.oBackingStorePixelRatio ||
                    this.context.backingStorePixelRatio || 1;

            }

            this.scale = deviceRatio / backingStoreRatio;
            this._deviceRatio = deviceRatio;

            this.canvas.width = this.width * this.scale;
            this.canvas.height = this.height * this.scale;

            this.canvas.style.width = `${this.width}px`;
            this.canvas.style.height = `${this.height}px`;


            // Calculate fullscreen settings

            if (config.fullscreen.nativeResolution) {
                this._fullScreenXScaling = screen.width / this.width;
                this._fullScreenYScaling = screen.height / this.height;
            } else {
                this._fullScreenXScaling = 1;
                this._fullScreenYScaling = 1;
            }

            this._fullScreenXPos = 0;
            this._fullScreenYPos = 0;

            if (config.fullscreen.maintainAspectRatio) {
                if (this._fullScreenXScaling > this._fullScreenYScaling) {
                    this._fullScreenXScaling = this._fullScreenYScaling;
                    this._fullScreenXPos = (screen.width - (this.width * this._fullScreenXScaling)) / 2;
                } else {
                    this._fullScreenYScaling = this._fullScreenXScaling;
                    this._fullScreenYPos = (screen.height - (this.height * this._fullScreenYScaling)) / 2;
                }
            }


            // Call getContext last for Ejecta only.
            if (typeof ejecta !== "undefined") {
                this.context = this.canvas.getContext("2d");
            }

            this.context.scale(this._deviceRatio, this._deviceRatio);

        } else {

            this.canvas.width = this.width;
            this.canvas.height = this.height;

            this.context = this.canvas.getContext("2d");

        }

        if (typeof this.context.imageSmoothingEnabled !== "undefined") {
            this.context.imageSmoothingEnabled = config.imageSmoothing || false;
        }


        // Initialize defaults
        this.frameCounter = 0;


        // Initialize input methods
        this.inputs = {};

        if (config.inputs.keyboard) {
            this.inputs.keyboard = new KeyboardInput(this);
        }

        if (config.inputs.gamepad) {
            this.inputs.gamepad = new GamepadInput(this);
        }

        this._game = this;
        this._lastFrameTimestamp = 0;
        this._lastFrameTotalRenders = 0;
        this._wantPause = true;
        this._fullScreenLastFrame = false;

    }


    setCamera (x, y) {

        if (x instanceof Vector2D) {

            let pos = x.clone();
            pos.x = -pos.x;
            pos.y = -pos.y;

            this.pos = pos;

        } else {

            this.pos.x = -x;
            this.pos.y = -y;

        }

    }


    step (delta) {

        this.frameCounter++;

        this._preStep();
        this._updateEntity(delta);
        this._renderEntity();
        this._updateInputs(); // NK: This happens at the end for reasons

    }


    _updateInputs () {

        for (let input in this.inputs) {
            if (this.inputs[input].update) {
                this.inputs[input].update();
            }
        }

    }


    _preStep () {

        if (this.isFullScreen) {

            if (this._fullScreenLastFrame == false) {

                this.canvas.style.width = `${screen.width}px`;
                this.canvas.style.height = `${screen.height}px`;

                if (this.fullScreenNativeResolution) {
                    this.canvas.width = screen.width * this.scale;
                    this.canvas.height = screen.height * this.scale;
                    this.context.scale(this._deviceRatio, this._deviceRatio);
                }

            }

            this._fullScreenLastFrame = true;

        } else {

            if (this._fullScreenLastFrame == true) {

                this.canvas.style.width = `${this.width}px`;
                this.canvas.style.height = `${this.height}px`;

                this.canvas.width = this.width * this.scale;
                this.canvas.height = this.height * this.scale;

                this.context.scale(this._deviceRatio, this._deviceRatio);

            }

            this._fullScreenLastFrame = false;

        }

    }


    start () {

        var self = this; // NK: Hate doing this...better way plz?

        if (self._wantPause) {
            self._wantPause = false;
        } else {
            console.log("MomentumEngine.Classes.Game.start called, game instance is already started");
            return false; // Game is already running
        }

        self._wantPause = false;

        let requestFrame = (() => {

            return (window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                function (callback) {
                    window.setTimeout(callback, 1000 / self.desiredFps);
                });

        })();

        self._lastFrameTimestamp = +(new Date());
        self.startTime = self._lastFrameTimestamp;

        var loop = function () {

            if (self._wantPause) {
                return;
            }

            let currentTimestamp = +(new Date()),
                delta = currentTimestamp - self._lastFrameTimestamp;

            if (self.fixFrameRate) {
                delta = 1000 / self.desiredFps;
            }

            //delta = Math.min(delta, 1000 / self.desiredFps);
            self._lastFrameTimestamp = currentTimestamp;
            self._lastFrameTotalRenders = 0;

            self.step(delta);

            requestFrame(loop);

        };

        loop();
        return true;

    }


    pause () {

        if (!this._wantPause) {
            this._wantPause = true;
            return true;
        } else {
            console.log("MomentumEngine.Classes.Game.pause called, game instance is already paused");
            return false;
        }
    }


    toggleFullScreen () {

        if (!document.mozFullScreen && !document.webkitFullScreen) {

            if (this.canvas.mozRequestFullScreen) {
                this.canvas.mozRequestFullScreen();
            } else {
                this.canvas.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }

        } else {

            if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else {
                document.webkitCancelFullScreen();
            }

        }

    }


    get isFullScreen () {
        return document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
    }


}


export default Game;
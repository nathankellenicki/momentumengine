"use strict";

import Entity from "./entity.js";
import Vector2D from "./vector2d.js";

import KeyboardInput from "./keyboardinput.js";
import GamepadInput from "./gamepadinput.js";

class Game extends Entity {


    constructor (config) {

        super(); // Call entity constructor
        config = config || {};
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


        // Optional params
        this.desiredFps = config.desiredFps || 60;

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

            this.canvas.width = this.width * this.scale;
            this.canvas.height = this.height * this.scale;

            this.canvas.style.width = `${this.width}px`;
            this.canvas.style.height = `${this.height}px`;

            // Call getContext last for Ejecta only.
            if (typeof ejecta !== "undefined") {
                this.context = this.canvas.getContext("2d");
            }

            this.context.scale(deviceRatio, deviceRatio);

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

        this._updateEntity(delta);
        this._renderEntity();

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
                    console.log("THIS");
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


}


export default Game;
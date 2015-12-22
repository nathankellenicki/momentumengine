"use strict";

import Entity from "./entity.js";
import KeyboardInput from "./keyboardinput.js";

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

            this.canvas.style.width = this.width + "px";
            this.canvas.style.height = this.height + "px";

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
        this.lastFrameDelta = 0;
        this.frameCounter = 0;

        this.inputs = {};
        if (config.inputs.keyboard) {
            this.inputs.keyboard = new KeyboardInput(this);
        }

        this._game = this;
        this._lastFrameTimestamp = 0;
        this._wantPause = true;

    }


    start () {

        var self = this; // NK: Hate doing this...better way plz?

        if (self._wantPause) {
            self._wantPause = false;
        } else {
            console.log("MomentumEngine.Game.start called, game instance is already started");
            return false; // Game is already running
        }

        self._wantPause = false;

        var requestFrame = (() => {

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

            self.frameCounter++;

            let currentTimestamp = +(new Date());

            self.lastFrameDelta = currentTimestamp - self._lastFrameTimestamp;
            self._lastFrameTimestamp = currentTimestamp;

            self.lastFrameDelta = Math.min(self.lastFrameDelta, 1000 / self.desiredFps);

            if (self._wantPause) {
                return;
            }

            self._updateEntity.bind(self);
            self._updateEntity();

            self._renderEntity.bind(self);
            self._renderEntity();

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
            console.log("MomentumEngine.Game.pause called, game instance is already paused");
            return false;
        }
    }


}


export default Game;
"use strict";


class Gamepad {

    constructor (gamepadObj) {
        this._gamepadObj = gamepadObj;
    }

    get numButtons () {
        return this._gamepadObj.buttons.length;
    }

    get numAxis () {
        return this._gamepadObj.axes.length;
    }

    isPressed (buttonId) {

        if (this._gamepadObj.buttons[buttonId]) {
            return !!this._gamepadObj.buttons[buttonId].pressed;
        } else {
            throw new Error(`Button ${buttonId} not found on gamepad`);
        }

    }

    getAxis (axisId) {

        if (typeof this._gamepadObj.axes[axisId] !== "undefined") {
            return this._gamepadObj.axes[axisId];
        } else {
            throw new Error(`Axis ${axisId} not found on gamepad`);
        }

    }

}


class GamepadInput {


    constructor () {

        var self = this;

        self._gamepadState = {};
        self.gamepadIds = [];

        if ('ongamepadconnected' in window) {

            window.addEventListener("gamepadconnected", (event) => {
                self._gamepadState[event.gamepad.index] = new Gamepad(event.gamepad);
                self.gamepadIds.push(event.gamepad.index);
                console.log(`Gamepad ${event.gamepad.index} connected`);
            });

            window.addEventListener("gamepaddisconnected", (event) => {
                delete self._gamepadState[event.gamepad.index];
                self.gamepadIds.splice(self.gamepadIds.indexOf(event.gamepad.index));
                console.log(`Gamepad ${event.gamepad.index} disconnected`);
            });

        }

    }


    update () {

        if (!("ongamepadconnected" in window)) {

            let gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);

            // If there are more gamepads registered than we know about, make ourselves aware of the new ones
            if (gamepads.length != this.gamepadIds.length) {

                for (let i = 0; i < gamepads.length; i++) {

                    let gamepad = gamepads[i];

                    if (gamepad) {

                        if (this.gamepadIds.indexOf(gamepad.index) < 0) {
                            this._gamepadState[gamepad.index] = new Gamepad(gamepad);
                            this.gamepadIds.push(gamepad.index);

                            console.log(`Gamepad ${gamepad.index} connected`);

                        }

                    }

                }

                // If there is still a mismatch, then we assume some gamepads have been disconnected, so we need to remove them
                if (gamepads.length != this.gamepadIds.length) {

                    for (let i = 0; i < this.gamepadIds.length; i++) {

                        let found = false;

                        for (let j = 0; j < gamepads.length; j++) {

                            let gamepad = gamepads[i];

                            if (gamepad && gamepad.index == this.gamepadIds[i]) {
                                found = true;
                            }

                        }

                        if (!found) {

                            console.log(`Gamepad ${this.gamepadIds[i]} disconnected`);

                            delete this._gamepadState[this.gamepadIds[i]];
                            this.gamepadIds.splice(this.gamepadIds.indexOf(this.gamepadIds[i]));

                            i--;

                        }

                    }

                }

            }

        }

    }


    get numGamepads () {
        return this.gamepadIds.length;
    }


    getGamepadById (gamepadId) {

        if (this._gamepadState[gamepadId]) {
            return this._gamepadState[gamepadId];
        } else {
            throw new Error(`Gamepad ${buttonId} is not connected`);
        }

    }


}


export default GamepadInput;
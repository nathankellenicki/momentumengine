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

        if (this._gamepadObj.axes[axisId]) {
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

        window.addEventListener("gamepadconnected", (event) => {
            self._gamepadState[event.gamepad.index] = new Gamepad(event.gamepad);
            self.gamepadIds.push(event.gamepad.index);
            console.log("Connected");
            console.log(event.gamepad);
            console.log(event.gamepad.buttons[0]);
        });

        window.addEventListener("gamepaddisconnected", (event) => {
            delete self._gamepadState[event.gamepad.index];
            self.gamepadIds.splice(self.gamepadIds.indexOf(event.gamepad.index));
            console.log("Disconnected");
        });

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
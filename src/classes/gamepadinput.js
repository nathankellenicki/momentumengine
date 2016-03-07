"use strict";


class GamepadInput {


    constructor () {

        var self = this;

        self._gamepadState = {};
        self._gamepadList = [];

        window.addEventListener("gamepadconnected", (event) => {
            self._gamepadState[event.gamepad.index] = event.gamepad;
            self._gamepadList.push(event.gamepad.index);
        });

        window.addEventListener("gamepaddisconnected", (event) => {
            delete self._gamepadState[event.gamepad.index];
            self._gamepadList.splice(self._gamepadList.indexOf(event.gamepad.index));
        });

    }


}


export default GamepadInput;
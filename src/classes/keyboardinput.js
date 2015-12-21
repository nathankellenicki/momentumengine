"use strict";


const KeyConsts = {
    SPACE: 32,
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    PAUSE: 19,
    CAPS_LOCK: 20,
    ESCAPE: 27,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    INSERT: 45,
    DELETE: 46,
    NUM_0: 48,
    NUM_1: 49,
    NUM_2: 50,
    NUM_3: 51,
    NUM_4: 52,
    NUM_5: 53,
    NUM_6: 54,
    NUM_7: 55,
    NUM_8: 56,
    NUM_9: 57,
    CHAR_A: 65,
    CHAR_B: 66,
    CHAR_C: 67,
    CHAR_D: 68,
    CHAR_E: 69,
    CHAR_F: 70,
    CHAR_G: 71,
    CHAR_H: 72,
    CHAR_I: 73,
    CHAR_J: 74,
    CHAR_K: 75,
    CHAR_L: 76,
    CHAR_M: 77,
    CHAR_N: 78,
    CHAR_O: 79,
    CHAR_P: 80,
    CHAR_Q: 81,
    CHAR_R: 82,
    CHAR_S: 83,
    CHAR_T: 84,
    CHAR_U: 85,
    CHAR_V: 86,
    CHAR_W: 87,
    CHAR_X: 88,
    CHAR_Y: 89,
    CHAR_Z: 90,
    NUM_PAD_0: 96,
    NUM_PAD_1: 97,
    NUM_PAD_2: 98,
    NUM_PAD_3: 99,
    NUM_PAD_4: 100,
    NUM_PAD_5: 101,
    NUM_PAD_6: 102,
    NUM_PAD_7: 103,
    NUM_PAD_8: 104,
    NUM_PAD_9: 105,
    MULTIPLY: 106,
    ADD: 107,
    SUBTRACT: 109,
    DECIMAL: 110,
    DIVIDE: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    SEMICOLON: 186,
    EQUALS: 187,
    COMMA: 188,
    DASH: 189,
    PERIOD: 190,
    FORWARD_SLASH: 191,
    GRAVE: 192,
    OPEN_BRACKET: 219,
    BACK_SLASH: 220,
    CLOSE_BRACKET: 221,
    SINGLE_QUOTE: 222
};


class KeyboardInput {


    constructor () {

        var self = this;
        self._keyState = {};

        window.addEventListener("keydown", (event) => {
            self._keyDownHandler(event);
        }, false);

        window.addEventListener("keyup", (event) => {
            self._keyUpHandler(event);
        }, false);

    }


    isPressed (keyCode) {
    return !!this._keyState[keyCode];
    }


    _keyDownHandler (event) {
        this._keyState[event.keyCode] = true;
    }


    _keyUpHandler (event) {
        this._keyState[event.keyCode] = false;
    }


}


export default KeyboardInput;
export {KeyConsts};
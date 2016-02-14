"use strict";

import Game from "./classes/game.js";
import Emitter from "./classes/emitter.js";
import Field from "./classes/field.js";
import Entity from "./classes/entity.js";
import Vector2D from "./classes/vector2d.js";
import Sprite from "./classes/sprite.js";
import Rect from "./classes/rect.js";
import Color from "./classes/color.js";
import ImageLoader from "./classes/imageloader.js";

import {KeyConsts} from "./classes/keyboardinput.js";


const Classes = {
    Game,
    Emitter,
    Field,
    Entity,
    Sprite,
    Rect,
    Vector2D,
    Color,
    ImageLoader
};


const Consts = {
    Input: {
        Keys: KeyConsts
    }
};


export default {
    Classes,
    Consts
};
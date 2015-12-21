"use strict";

import Game from "./classes/game.js";
import Entity from "./classes/entity.js";
import Vector2D from "./classes/vector2d.js";
import Rect from "./classes/rect.js";
import Color from "./classes/color.js";

import {KeyConsts} from "./classes/keyboardinput.js";


const Classes = {
    Game: Game,
    Entity: Entity,
    Rect: Rect,
    Vector2D: Vector2D,
    Color: Color
};


const Consts = {
    Input: {
        Keys: KeyConsts
    }
};


window.MomentumEngine = {
    Classes: Classes,
    Consts: Consts
};
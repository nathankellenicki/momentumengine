"use strict";

import Game from "./classes/game.js";
import Emitter from "./classes/emitter.js";
import Field from "./classes/field.js";
import Entity from "./classes/entity.js";
import Vector2D from "./classes/vector2d.js";
import Sprite from "./classes/sprite.js";
import Rect from "./classes/rect.js";
import Path from "./classes/path.js";
import Color from "./classes/color.js";
import Text from "./classes/text.js";
import Font from "./classes/font.js";
import AudioTrack from "./classes/audio.js";
import ImageLoader from "./classes/imageloader.js";

import {KeyConsts} from "./classes/keyboardinput.js";


const Classes = {
    Game,
    Emitter,
    Field,
    Entity,
    Sprite,
    Rect,
    Path,
    Vector2D,
    Color,
    Text,
    Font,
    AudioTrack,
    ImageLoader
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
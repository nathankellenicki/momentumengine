"use strict";

import Game from "./classes/game.js";
import Entity from "./classes/entity.js";
import Vector2D from "./classes/vector2d.js";

window.MomentumEngine = {
    Game: Game,
    Entity: Entity,
    Vector2D: Vector2D
};

export {Game};
export {Entity};
export {Vector2D};
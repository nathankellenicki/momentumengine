"use strict";

import Entity from "./entity.js";
import Vector2D from "./vector2d.js";

import CollisionMethods from "../libs/collisionmethods.js";


class Rect extends Entity {


    constructor (x, y, width, height, color) {

        super(x, y);

        this.size.x = width || 0;
        this.size.y = height || 0;
        this.color = color;

    }


    isCollidingWith (entity) {

        if (entity instanceof Rect) {
            return CollisionMethods.AABB(this, entity);
        }

    }


    render () {

        if (this._game) {

            this._game.context.fillStyle = this.color.toString();
            this._game.context.fillRect(this.relativeLeft, this.relativeTop, this.width, this.height);

            return true;

        } else {
            return false;
        }

    }


}


export default Rect;
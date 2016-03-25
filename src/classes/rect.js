"use strict";

import Entity from "./entity.js";

import CollisionMethods from "../libs/collisionmethods.js";


/**
 *  Class representing a rectangle in a scene
 *  @extends Entity
 */
class Rect extends Entity {


    /**
     * Create a rectangle
     * @param {number} x - x (Left) position of the rectangle
     * @param {number} y - y (Top) position of the rectangle
     * @param {number} width - Width of the rectangle
     * @param {number} height - Height of the rectangle
     * @param {Color} color - Color of the rectangle
     */
    constructor (x, y, width, height, color) {

        super(x, y);

        this.size.x = width || 0;
        this.size.y = height || 0;
        this.color = color;

    }


    /**
     * Detects if the rectangle is colliding with another entity
     * @param {Entity} entity - Entity to check against
     * @returns {boolean} Indicates whether the entities are colliding
     */
    isCollidingWith (entity) {

        if (entity instanceof Rect) {
            return CollisionMethods.AABB(this, entity);
        }

    }


    render () {

        if (this._game) {

            this._game.context.fillStyle = this.color.toString();
            this._game.context.fillRect(this._scaleForLeft(this.relativeLeft), this._scaleForTop(this.relativeTop), this._scaleForWidth(this.width), this._scaleForHeight(this.height));

            return true;

        } else {
            return false;
        }

    }


}


export default Rect;
"use strict";

import Entity from "./entity.js";
import Vector2D from "./vector2d.js";


class Text extends Entity {


    constructor (x, y, font, text) {

        super(x, y);

        this.font = font;
        this.text = text;

        this.textAlign = "start";
        this.textBaseline = "alphabetic";
        this.direction = "inherit";

    }


    isCollidingWith (entity) {

        if (entity instanceof Rect) {
            return CollisionMethods.AABB(this, entity);
        }

    }


    render () {

        if (this._game) {

            this._game.context.font = `${this.font.size} ${this.font.family}`;

            this._game.context.textAlign = this.textAlign;
            this._game.context.textBaseline = this.textBaseline;
            this._game.context.direction = this.direction;

            if (this.font.fill) {
                this._game.context.fillStyle = this.font.fill;
                this._game.context.fillText(this.text, this.relativeLeft, this.relativeTop);
            }

            if (this.font.stroke) {
                this._game.context.strokeStyle = this.font.stroke;
                this._game.context.strokeText(this.text, this.relativeLeft, this.relativeTop);
            }

            return true;

        } else {
            return false;
        }

    }


}


export default Text;
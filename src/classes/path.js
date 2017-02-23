"use strict";

import Entity from "./entity.js";
import Vector2D from "./vector2d.js";

import CollisionMethods from "../libs/collisionmethods.js";


class Path extends Entity {


    constructor (x, y, width, height, color) {

        super(x, y);

        if (width instanceof Array) {
            color = height;
            this.coords = width;
        } else {
            this.coords = [new Vector2D(width, height)];
        }

        this.color = color;

    }


    render () {

        if (this._game) {

            let ctx = this._game.context;
            ctx.strokeStyle = this.color.toString();

            ctx.beginPath();
            ctx.moveTo(this._scaleForLeft(this.relativeLeft), this._scaleForTop(this.relativeTop));

            for (let coord in this.coords) {
                ctx.lineTo(this._scaleForWidth(this.relativeLeft + this.coords[coord].x), this._scaleForHeight(this.relativeTop + this.coords[coord].y));
            }

            //ctx.closePath();
            ctx.stroke();

            return true;

        } else {
            return false;
        }

    }


}


export default Path;
"use strict";

class Vector2D {


    constructor (x, y) {
        this.x = x || 0; this.y = y || 0;
    }


    invert () {
        this.x = -this.x; this.y = -this.y;
        return this;
    }


    add (val) {

        if (val instanceof Vector2D) {
            this.x += val.x; this.y += val.y;
        } else {
            this.x += val; this.y += val;
        }

        return this;

    }


    subtract (val) {

        if (val instanceof Vector2D) {
            this.x -= val.x; this.y -= val.y;
        } else {
            this.x -= val; this.y -= val;
        }

        return this;

    }


    multiply (val) {

        if (val instanceof Vector2D) {
            this.x *= val.x; this.y *= val.y;
        } else {
            this.x *= val; this.y *= val;
        }

        return this;

    }


    divide (val) {

        if (val instanceof Vector2D) {
            this.x /= val.x; this.y /= val.y;
        } else {
            this.x /= val; this.y /= val;
        }

        return this;

    }


    equals (val) {
        return (this.x == val.x && this.y == val.y);
    }


    dot (val) {
        return this.x * val.x + this.y * val.y;
    }


    length () {
        return Math.sqrt(this.dot(this));
    }


    unit () {
        return this.divide(this.length());
    }


    min () {
        return Math.min(this.x, this.y);
    }


    max () {
        return Math.max(this.x, this.y);
    }


    toArray () {
        return [this.x, this.y];
    }


    clone () {
        return new Vector2D(this.x, this.y);
    }


}


export default Vector2D;
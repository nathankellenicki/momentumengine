"use strict";

class Color {


    constructor (r = 0, g = 0, b = 0, a = 1) {

        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;

    }


    toString () {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
    }


    toHex () {
        return `#${((r << 16) | (g << 8) | b).toString(16)}`;
    }


    clone () {
        return new Color(this.r, this.g, this.b, this.a);
    }


    add (color) {

        if (color instanceof Color) {
            this.r += color.r; this.g += color.g; this.b += color.b; this.a += color.a;
        } else {
            this.r += color; this.g += color; this.b += color; this.a += color;
        }

        return this;

    }


    subtract (color) {

        if (color instanceof Color) {
            this.r -= color.r; this.g -= color.g; this.b -= color.b; this.a -= color.a;
        } else {
            this.r -= color; this.g -= color; this.b -= color; this.a -= color;
        }

        return this;

    }


    multiply (color) {

        if (color instanceof Color) {
            this.r *= color.r; this.g *= color.g; this.b *= color.b; this.a *= color.a;
        } else {
            this.r *= color; this.g *= color; this.b *= color; this.a *= color;
        }

        return this;

    }


    divide (color) {

        if (color instanceof Color) {
            this.r /= color.r; this.g /= color.g; this.b /= color.b; this.a /= color.a;
        } else {
            this.r /= color; this.g /= color; this.b /= color; this.a /= color;
        }

        return this;

    }


}


export default Color;
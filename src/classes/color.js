"use strict";


/**
 * Class representing a color
 */
class Color {


    /**
     * Create a color
     * @param {number} red - Red value (0-255)
     * @param {number} green - Green value (0-255)
     * @param {number} blue - Blue value (0-255)
     * @param {number} alpha - Alpha value (0-1)
     */
    constructor (red = 0, green = 0, blue = 0, alpha = 1) {

        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;

    }


    /**
     * Returns the rgba (rgba()) string representation of the color
     * @returns {string}
     */
    toString () {
        return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
    }


    /**
     * Returns the hex (#) representation of the color
     * @returns {string}
     */
    toHex () {
        return `#${((r << 16) | (g << 8) | b).toString(16)}`;
    }


    /**
     * Clones the color and returns a new color
     * @returns {Color}
     */
    clone () {
        return new Color(this.red, this.green, this.blue, this.alpha);
    }


    /**
     * Add a color to this color
     * @param {Color} color - Color to add
     * @returns {Color}
     */
    add (color) {

        if (color instanceof Color) {
            this.red += color.r; this.green += color.g; this.blue += color.b; this.alpha += color.a;
        } else {
            this.red += color; this.green += color; this.blue += color; this.alpha += color;
        }

        return this;

    }


    /**
     * Subtract a color from this color
     * @param {Color} color - Color to subtract
     * @returns {Color}
     */
    subtract (color) {

        if (color instanceof Color) {
            this.red -= color.r; this.green -= color.g; this.blue -= color.b; this.alpha -= color.a;
        } else {
            this.red -= color; this.green -= color; this.blue -= color; this.alpha -= color;
        }

        return this;

    }


    /**
     * Multiply this color with another color
     * @param {Color} color - Color to multiply with
     * @returns {Color}
     */
    multiply (color) {

        if (color instanceof Color) {
            this.red *= color.r; this.green *= color.g; this.blue *= color.b; this.alpha *= color.a;
        } else {
            this.red *= color; this.green *= color; this.blue *= color; this.alpha *= color;
        }

        return this;

    }


    /**
     * Divide this color with another color
     * @param {Color} color - Color to divide by
     * @returns {Color}
     */
    divide (color) {

        if (color instanceof Color) {
            this.red /= color.r; this.green /= color.g; this.blue /= color.b; this.alpha /= color.a;
        } else {
            this.red /= color; this.green /= color; this.blue /= color; this.alpha /= color;
        }

        return this;

    }


}


export default Color;
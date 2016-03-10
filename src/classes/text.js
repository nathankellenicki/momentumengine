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
        this.letterSpacing = 0;

    }


    isCollidingWith (entity) {

        if (entity instanceof Rect) {
            return CollisionMethods.AABB(this, entity);
        }

    }


    _renderText (text, x, y, letterSpacing, renderFunc) {

        // Code modified from original by David Hong (sozonov): https://jsfiddle.net/sozonov/mg1jkz3q/

        if (!text || typeof text !== "string" || text.length === 0) {
            return false;
        }

        if (letterSpacing == 0) {
            renderFunc(text, x, y);
            return;
        }

        let characters = text.split(""),
            index = 0,
            current,
            currentPosition = x,
            align = 1;

        if (this.textAlign === "right") {
            characters = characters.reverse();
            align = -1;
        } else if (this.textAlign === "center") {

            let totalWidth = 0;

            for (let i = 0; i < characters.length; i++) {
                // NK: We want to cache the results of measureText instead of recalculating every character every frame
                totalWidth += (this._game.context.measureText(characters[i]).width + letterSpacing);
            }

            currentPosition = x - (totalWidth / 2);

        }

        while (index < text.length) {

            current = characters[index++];
            renderFunc(current, currentPosition, y);
            // NK: We want to cache the results of measureText instead of recalculating every character every frame
            currentPosition += (align * (this._game.context.measureText(current).width + letterSpacing));

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
                this._renderText(this.text, this.relativeLeft, this.relativeTop, this.letterSpacing, this._game.context.fillText.bind(this._game.context));
            }

            if (this.font.stroke) {
                this._game.context.strokeStyle = this.font.stroke;
                this._renderText(this.text, this.relativeLeft, this.relativeTop, this.letterSpacing, this._game.context.strokeText.bind(this._game.context));
            }

            return true;

        } else {
            return false;
        }

    }


}


export default Text;
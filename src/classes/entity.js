"use strict";

import Vector2D from "./vector2d.js";

class Entity {


    constructor (x, y) {

        this.pos = new Vector2D(x || 0, y || 0);
        this.velocity = new Vector2D(0, 0);
        this.acceleration = new Vector2D(0, 0);
        this.size = new Vector2D(0, 0);

        this.fields = [];

        this.state = {};
        this.children = [];

        this._relativePos = this.pos.clone();
        this._lastCalculated = 0;
        this._game = null;
        this._parent = null;

        this._creationTime = +(new Date());

    }


    get left () {
        return this.pos.x;
    }

    set left (val) {
        return this.pos.x = val;
    }


    get top () {
        return this.pos.y;
    }

    set top (val) {
        return this.pos.y = val;
    }


    get relativeLeft () {
        return this._calculateRelativePos().x;
    }


    get relativeTop () {
        return this._calculateRelativePos().y;
    }


    get width () {
        return this.size.x;
    }


    set width (width) {
        return this.size.x = width;
    }


    get height () {
        return this.size.y;
    }


    set height (height) {
        return this.size.y = height;
    }


    setVelocity (x, y) {

        if (x instanceof Vector2D) {
            this.velocity = x;
        } else {
            this.velocity.x = x;
            this.velocity.y = y;
        }

    }


    setAcceleration (x, y) {

        if (x instanceof Vector2D) {
            this.acceleration = x;
        } else {
            this.acceleration.x = x;
            this.acceleration.y = y;
        }

    }


    createChildEntity () {

        let child = new Entity();

        child._updateGame(this._game);
        child._parent = this;
        this.children.push(child);

        return child;

    }


    addChildEntity (child) {

        child._updateGame(this._game);
        child._parent = this;
        this.children.push(child);

        return child;

    }


    detachChildEntity (child) {

        for (let i = 0; i < this.children.length; i++) {
            if (this.children[i] == child) {

                this.children.splice(i, 1);
                return true;

            }
        }

        return false;

    }


    _calculateRelativePos () {

        // NK: The purpose of this function is to calculate the true position of the entity relative to all its parents. It does this recursively, calling the _calculateRelativePos method all the way back up the tree and continuously adding the results together.

        // Note there is a limiter, where the last calculated frame is stored, so that if the position has already been calculated for that node in this particular frame, the cached result is used rather than recalculating.

        // When rendering, the draw calls should use this._relativePos rather than this.pos in order for the position to be correct.

        if (this._game && this._lastCalculated < this._game.frameCounter) {

            if (this._parent) {

                this._relativePos.x = this.pos.x + this._parent.relativeLeft;
                this._relativePos.y = this.pos.y + this._parent.relativeTop;

            } else {
                this._relativePos.x = this.pos.x;
                this._relativePos.y = this.pos.y;
            }

            this._lastCalculated = this._game.frameCounter;

        }

        return this._relativePos;

    }


    _updateGame (game) {

        this._game = game;

        this.children.forEach((child) => {
            child._updateGame(game);
        });

    }


    _calculateFields (delta) {

        let acceleration = new Vector2D(0, 0);

        for (let i = 0; i < this.fields.length; i++) {

            let field = this.fields[i];

            // NK: These call _relativePos, I don't like using this outside of the render method...
            let vector = new Vector2D(
                field.relativeLeft - this.relativeLeft,
                field.relativeTop - this.relativeTop
            );

            let force = field.mass / Math.pow(vector.dot(vector), 1.5);

            acceleration.add(vector.multiply(force).multiply(delta));

        }

        return this.acceleration.clone().add(acceleration);

    }


    _updateEntity (delta) {

        if (this.timeToLive) {
            if (+(new Date()) - this._creationTime > this.timeToLive) {
                this._parent.detachChildEntity(this);
            }
        }

        // Calculate new position based on velocity and acceleration if there's one set
        if (this.velocity && (this.velocity.x !== 0 || this.velocity.y !== 0)) {

            this.velocity.add(this._calculateFields(delta));
            this.pos.add(this.velocity.clone().multiply(delta));

        }

        // If there's an update method, call it
        let updated = this.update && this.update(delta);

        if (updated || (typeof updated == "undefined") || (typeof this.update === "undefined")) {

            this.children.forEach((child) => {
                child._updateEntity(delta);
            });

        }

    }


    _renderEntity () {

        let rendered = this.render && this.render();

        if (rendered) {
            this._game._lastFrameTotalRenders++;
        }

        if (rendered || (typeof rendered == "undefined") || (typeof this.render === "undefined")) {

            this.children.forEach((child) => {
                child._renderEntity();
            });

        }

    }


}


export default Entity;
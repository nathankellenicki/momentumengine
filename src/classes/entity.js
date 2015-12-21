"use strict";

import Vector2D from "./vector2d.js";

class Entity {


    constructor (x, y) {

        this.pos = new Vector2D(x || 0, y || 0);

        this.state = {};
        this.children = [];

        this._calculatedPos = this.pos.clone();
        this._lastCalculated = 0;
        this._game = null;
        this._parent = null;

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


    detachChildEntity (entity) {
        // Not implemented
    }


    _recalculatePos () {

        // NK: This should be called within "render", not "update". The purpose of this function is to calculate the true position of the entity relative to all its parents. It does this recursively, calling the _recalculatePos method all the way back up the tree and continuously adding the results together.

        // Note there is a limiter, where the last calculated frame is stored, so that if the position has already been calculated for that node in this particular frame, the cached result is used rather than recalculating.

        if (this._game && this._lastCalculated < this._game.frameCounter) {

            if (this._parent) {

                let parentPos = this._parent._recalculatePos();

                this._calculatedPos.x = this.pos.x + parentPos.x;
                this._calculatedPos.y = this.pos.y + parentPos.y;
            } else {
                this._calculatedPos.x = this.pos.x;
                this._calculatedPos.y = this.pos.y;
            }

            this._lastCalculated = this._game.frameCounter;

        }

        return this._calculatedPos;

    }


    _updateGame (game) {

        this._game = game;

        this.children.forEach((child) => {
            child._updateGame(game);
        });

    }


    _updateEntity () {

        if ((this.update && this.update()) || (typeof this.update === "undefined")) {

            this.children.forEach((child) => {
                child._updateEntity();
            });

        }

    }


    _renderEntity () {

        if ((this.render && this.render()) || (typeof this.render === "undefined")) {

            this.children.forEach((child) => {
                child._renderEntity();
            });

        }

    }


}


export default Entity;
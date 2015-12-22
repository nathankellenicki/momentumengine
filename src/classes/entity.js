"use strict";

import Vector2D from "./vector2d.js";

class Entity {


    constructor (x, y) {

        this.pos = new Vector2D(x || 0, y || 0);

        this._ready = true;
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


    detachChildEntity (child) {

        for (var i = 0; i < this.children.length; i++) {
            if (this.children[i] == child) {

                this.children.splice(i, 1);
                return true;

            }
        }

        return false;

    }


    isReady () {
        return this._ready;
    }


    _preprocess () {

        // NK: The purpose of this function is to calculate the true position of the entity relative to all its parents. It does this recursively, calling the _preprocess method all the way back up the tree and continuously adding the results together.

        // Note there is a limiter, where the last calculated frame is stored, so that if the position has already been calculated for that node in this particular frame, the cached result is used rather than recalculating.

        // When rendering, the draw calls should use this._calculatedPos rather than this.pos in order for the position to be correct.

        if (this._game && this._lastCalculated < this._game.frameCounter) {

            if (this._parent) {

                let parentPos = this._parent._preprocess();

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

        var updated = this.update && this.update();

        if (this.isReady() && (updated || (typeof updated == "undefined") || (typeof this.update === "undefined"))) {

            this.children.forEach((child) => {
                child._updateEntity();
            });

        }

    }


    _renderEntity () {

        this._preprocess();

        var rendered = this.render && this.render();

        if (this.isReady() && (rendered || (typeof rendered == "undefined") || (typeof this.render === "undefined"))) {

            this.children.forEach((child) => {
                child._renderEntity();
            });

        }

    }


}


export default Entity;
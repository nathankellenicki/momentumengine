"use strict";

class Entity {


    constructor () {
        this.state = {};
        this.children = [];
    }


    createChildEntity () {

        let child = new Entity();
        this.children.push(child);

        return child;

    }


    addChildEntity (entity) {

        this.children.push(entity);
        return entity;

    }


    detachChildEntity (entity) {
        // Not implemented
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
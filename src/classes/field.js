"use strict";

import Entity from "./entity.js";
import Vector2D from "./vector2d.js";


class Field extends Entity {


    constructor (x, y, mass) {

        super(x, y);
        this.mass = mass;

    }


}


export default Field;
"use strict";

import Color from "./color.js";


class Font {


    constructor(family, size, fill = null, stroke = null) {

        this.family = family;
        this.size = `${size}px`;
        this.fill = fill;
        this.stroke = stroke;

    }


}


export default Font;
class Color {


    constructor (r, g, b, a) {

        this.r = r || 0;
        this.g = g || 0;
        this.b = b || 0;
        this.a = a || 1;

    }


    toString () {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
    }


    toHex () {
        return `#${((r << 16) | (g << 8) | b).toString(16)}`;
    }


}


export default Color;
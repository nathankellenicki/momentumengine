"use strict";

class ImageLoader {


    constructor (src) {

        this._loaded = false; // Default is true, set it to false until the image has loaded
        this._error = false; // If the image fails to load, this will contain the reason

        this._imageObj = new Image();

        this._imageObj.addEventListener("load", () => {
            this._loaded = true;
            this._error = false;
        });

        this._imageObj.addEventListener("_error", (err) => {
            this._loaded = false;
            this._error = err;
        });

        this._imageObj.src = src;

    }


    getImageObj () {

        if (this._loaded) {
            return this._imageObj;
        } else {
            return false;
        }

    }


    isLoaded () {
        return this._loaded;
    }


    isError () {
        return this._error;
    }


}


export default ImageLoader;
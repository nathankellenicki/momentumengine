"use strict";

import Entity from "./entity.js";
import Vector2D from "./vector2d.js";
import ImageLoader from "./imageloader.js";

import CollisionMethods from "../libs/collisionmethods.js";


class Sprite extends Entity {


    constructor (x, y, width, height, image) {

        if (!image instanceof ImageLoader) {
            throw new Error("MomentumEngine.Classes.Sprite must be instantiated with an ImageLoader instance");
        }

        super(x, y);

        this.size = new Vector2D(width || 0, height || 0);

        this._image = image;
        this._imagePos = new Vector2D(0, 0);
        this._imageSize = new Vector2D(0, 0);

    }


    setImageCoords (x, y, width, height) {

        this._imagePos.x = x;
        this._imagePos.y = y;
        this._imageSize.x = width || 0;
        this._imageSize.y = height || 0;

    }


    isReady () {
        return (this._image.isLoaded() && !this._image.isError());
    }


    render () {

        if (this.isReady() && this._game) {

            let imageObj = this._image.getImageObj();

            let subWidth = imageObj.width - this._imagePos.x,
                subHeight = imageObj.height - this._imagePos.y;

            this._game.context.drawImage(
                imageObj,
                this._imagePos.x,
                this._imagePos.y,
                this._imageSize.x || subWidth,
                this._imageSize.y || subHeight,
                this._calculatedPos.x,
                this._calculatedPos.y,
                this.size.x || subWidth,
                this.size.y || subHeight
            );

            return true;

        } else {
            return false;
        }

    }


}


export default Sprite;
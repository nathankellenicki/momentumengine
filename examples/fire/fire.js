"use strict";

import MomentumEngine from "../../src/es6";

let KeyConsts = MomentumEngine.Consts.Input.Keys;

let black = new MomentumEngine.Classes.Color(0, 0, 0),
    fireParticleWidth = 150,
    fireParticleHeight = 150;


let startColour = new MomentumEngine.Classes.Color(250, 218, 68, 1),
    startColourRandom = new MomentumEngine.Classes.Color(62, 60, 60, 0),
    finishColour = new MomentumEngine.Classes.Color(245, 35, 0, 0),
    finishColourRandom = new MomentumEngine.Classes.Color(60, 60, 60, 0);


class RandomColor extends MomentumEngine.Classes.Color {

    constructor (initialColor, deltaColor) {

        let r = initialColor.r + (deltaColor.r * RandomColor._rand()),
            g = initialColor.g + (deltaColor.g * RandomColor._rand()),
            b = initialColor.b + (deltaColor.b * RandomColor._rand()),
            a = initialColor.a + (deltaColor.a * RandomColor._rand());

        super(~~r, ~~g, ~~b, ~~a);

    }

    static _rand () {
        return (Math.random() * 2 - 1);
    }

}


class FireParticle extends MomentumEngine.Classes.Entity {

    constructor (x, y) {
        super(x, y);
        this.timeToLive = 10000;
        this.startColor = new RandomColor(startColour, startColourRandom);
        this.finishColor = new RandomColor(finishColour, startColour);
        this.deltaColor = startColour.clone().subtract(finishColour);
    }

    update (delta) {
        this.startColor.a = this.startColor.a - (delta * 0.0001);
    }

    render () {

        var gradient = this._game.context.createRadialGradient(
            this._relativePos.x + fireParticleWidth / 2,
            this._relativePos.y + fireParticleHeight / 2,
            fireParticleWidth / 10,
            this._relativePos.x + fireParticleWidth / 2,
            this._relativePos.y + fireParticleHeight / 2,
            fireParticleWidth / 2
        );

        gradient.addColorStop(0, this.startColor.toString());
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        this._game.context.fillStyle = gradient;
        this._game.context.fillRect(this._relativePos.x, this._relativePos.y, fireParticleWidth, fireParticleHeight);

        return true;

    }

}


window.onload = function () {

    let width = 640,
        height = 360,
        baseSize = width / 64;

    let fireDemo = new MomentumEngine.Classes.Game({
        canvas: document.getElementById("canvas"),
        width: width,
        height: height,
        fixRatio: true,
        desiredFps: 60,
        inputs: {
            keyboard: true
        }
    });

    let mainScene = new MomentumEngine.Classes.Rect(0, 0, width, height, black);
    fireDemo.addChildEntity(mainScene);

    let fireEmitter = new MomentumEngine.Classes.Emitter(width / 2 - (fireParticleWidth / 2), height / 2 - (fireParticleHeight / 2), 250, new MomentumEngine.Classes.Vector2D(0.02, 0.02), FireParticle);
    mainScene.addChildEntity(fireEmitter);

    fireEmitter.setParticleParent(mainScene);
    fireEmitter.emitting = true;

    fireDemo.start();

};
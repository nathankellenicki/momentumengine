"use strict";

import MomentumEngine from "../../src/es6";

let KeyConsts = MomentumEngine.Consts.Input.Keys;


class BlueParticle extends MomentumEngine.Classes.Rect {

    constructor (x, y) {
        super(x, y, 1, 1, new MomentumEngine.Classes.Color(255, 255, 255, 0));
        this.timeToLive = 5000;
    }

    update (delta) {
        this.color.a = this.color.a - (delta * 0.00025);
    }

}


window.onload = function () {

    let width = 640,
        height = 360,
        baseSize = width / 64;

    let particles = new MomentumEngine.Classes.Game({
        canvas: document.getElementById("canvas"),
        width: width,
        height: height,
        fixRatio: true,
        desiredFps: 60,
        inputs: {
            keyboard: true
        }
    });

    let black = new MomentumEngine.Classes.Color(0, 0, 0),
        red = new MomentumEngine.Classes.Color(255, 0, 0);

    let mainScene = new MomentumEngine.Classes.Rect(0, 0, width, height, black);
    particles.addChildEntity(mainScene);

    let rect = new MomentumEngine.Classes.Rect(width / 2 - baseSize, height / 2 - baseSize, baseSize * 2, baseSize * 2, red),
        emitter = new MomentumEngine.Classes.Emitter(baseSize, baseSize, 4, new MomentumEngine.Classes.Vector2D(0, 1), BlueParticle);

    mainScene.addChildEntity(rect);
    rect.addChildEntity(emitter);

    rect.update = function (delta) {

        if (particles.inputs.keyboard.isPressed(KeyConsts.UP)) {
            rect.pos.y -= (0.2 * delta);
        }

        if (particles.inputs.keyboard.isPressed(KeyConsts.DOWN)) {
            rect.pos.y += (0.2 * delta);
        }

        if (particles.inputs.keyboard.isPressed(KeyConsts.LEFT)) {
            rect.pos.x -= (0.2 * delta);
        }

        if (particles.inputs.keyboard.isPressed(KeyConsts.RIGHT)) {
            rect.pos.x += (0.2 * delta);
        }

    };

    emitter.setParticleParent(mainScene);
    emitter.emitting = true;

    particles.start();

};
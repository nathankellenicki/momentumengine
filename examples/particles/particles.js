"use strict";

import MomentumEngine from "../../src/es6";

let KeyConsts = MomentumEngine.Consts.Input.Keys;


class BlueParticle extends MomentumEngine.Classes.Rect {

    constructor (x, y) {
        super(x, y, 1, 1, new MomentumEngine.Classes.Color(0, 255, 0));
        this.timeToLive = 25500;
    }

    update (delta) {
        this.color.a = this.color.a - (delta * 0.00004);
    }

}


window.onload = function () {

    let width = 640,
        height = 360,
        baseSize = width / 64;

    let particleDemo = new MomentumEngine.Classes.Game({
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
        red = new MomentumEngine.Classes.Color(255, 0, 0),
        blue = new MomentumEngine.Classes.Color(0, 0, 255);

    let mainScene = new MomentumEngine.Classes.Rect(0, 0, width, height, black);
    particleDemo.addChildEntity(mainScene);

    let emitterRect = new MomentumEngine.Classes.Rect(width / 8 - baseSize, height / 2 - baseSize, baseSize * 2, baseSize * 2, red),
        emitter = new MomentumEngine.Classes.Emitter(baseSize, baseSize, 4, new MomentumEngine.Classes.Vector2D(0, 0.05), BlueParticle);

    let bottomFieldRect = new MomentumEngine.Classes.Rect(width - (baseSize * 33), height - (baseSize * 11), baseSize * 2, baseSize * 2, blue),
        bottomField = new MomentumEngine.Classes.Field(baseSize, baseSize, 0.1);

    let topFieldRect = new MomentumEngine.Classes.Rect(width - (baseSize * 33), baseSize * 9, baseSize * 2, baseSize * 2, blue),
        topField = new MomentumEngine.Classes.Field(baseSize, baseSize, 0.1);

    mainScene.addChildEntity(emitterRect);
    emitterRect.addChildEntity(emitter);

    mainScene.addChildEntity(bottomFieldRect);
    bottomFieldRect.addChildEntity(bottomField);
    mainScene.addChildEntity(topFieldRect);
    topFieldRect.addChildEntity(topField);

    emitterRect.update = function (delta) {

        if (particleDemo.inputs.keyboard.isPressed(KeyConsts.UP)) {
            emitterRect.pos.y -= (0.2 * delta);
        }

        if (particleDemo.inputs.keyboard.isPressed(KeyConsts.DOWN)) {
            emitterRect.pos.y += (0.2 * delta);
        }

        if (particleDemo.inputs.keyboard.isPressed(KeyConsts.LEFT)) {
            emitterRect.pos.x -= (0.2 * delta);
        }

        if (particleDemo.inputs.keyboard.isPressed(KeyConsts.RIGHT)) {
            emitterRect.pos.x += (0.2 * delta);
        }

    };

    emitter.setParticleParent(mainScene);
    emitter.particleFields.push(bottomField, topField);
    emitter.spread = Math.PI / 8;
    emitter.emitting = true;

    particleDemo.start();

};
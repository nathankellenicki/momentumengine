"use strict";

import MomentumEngine from "../../src/es6";

let white = new MomentumEngine.Classes.Color(255, 255, 255);


class BlueParticle extends MomentumEngine.Classes.Rect {

    constructor (x, y) {
        super(x, y, 1, 1, white);
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
        desiredFps: 60
    });

    let black = new MomentumEngine.Classes.Color(0, 0, 0),
        red = new MomentumEngine.Classes.Color(255, 0, 0);

    let mainScene = new MomentumEngine.Classes.Rect(0, 0, width, height, black);
    particles.addChildEntity(mainScene);

    let rect = new MomentumEngine.Classes.Rect(width / 10 - baseSize, height - (baseSize * 10), baseSize * 2, baseSize * 2, red),
        emitter = new MomentumEngine.Classes.Emitter(baseSize, baseSize, 2, new MomentumEngine.Classes.Vector2D(1, 1), BlueParticle);

    mainScene.addChildEntity(rect);
    rect.addChildEntity(emitter);
    rect.setVelocity(0.01, 0);
    rect.setAcceleration(0.01, 0);

    emitter.setParticleParent(mainScene);
    emitter.emitting = true;

    particles.start();

};
"use strict";

import MomentumEngine from "../../src/es6";

let white = new MomentumEngine.Classes.Color(255, 255, 255);

class BlueParticle extends MomentumEngine.Classes.Rect {

    constructor (x, y) {
        super(x, y, 1, 1, white);
    }

}


window.onload = function () {

    var width = 640,
        height = 360,
        baseSize = width / 64;

    var particles = new MomentumEngine.Classes.Game({
        canvas: document.getElementById("canvas"),
        width: width,
        height: height,
        fixRatio: true,
        desiredFps: 60
    });

    var black = new MomentumEngine.Classes.Color(0, 0, 0),
        red = new MomentumEngine.Classes.Color(255, 0, 0);

    var mainScene = new MomentumEngine.Classes.Rect(0, 0, width, height, black);
    particles.addChildEntity(mainScene);

    var rect = new MomentumEngine.Classes.Rect(width / 2 - baseSize, height / 2 - baseSize, baseSize * 2, baseSize * 2, red),
        emitter = new MomentumEngine.Classes.Emitter(0, 0, new MomentumEngine.Classes.Vector2D(1, 1), BlueParticle);

    mainScene.addChildEntity(rect);
    rect.addChildEntity(emitter);

    emitter.emitting = true;
    particles.start();

};
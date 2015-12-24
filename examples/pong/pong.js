"use strict";

window.onload = function () {


    var KeyConsts = MomentumEngine.Consts.Input.Keys;


    var width = 640,
        height = 360,
        baseSize = width / 64;


    var pong = new MomentumEngine.Classes.Game({
        canvas: document.getElementById("canvas"),
        width: width,
        height: height,
        fixRatio: true,
        desiredFps: 60,
        inputs: {
            keyboard: true
        }
    });


    // Colors
    var white = new MomentumEngine.Classes.Color(255, 255, 255),
        black = new MomentumEngine.Classes.Color(0, 0, 0);


    // All of these are instances of MomentumEngine.Classes.Entity
    var mainScene = new MomentumEngine.Classes.Rect(0, 0, width, height, black),
        ball = new MomentumEngine.Classes.Rect((width / 2) - (baseSize / 2), (height / 2) - (baseSize / 2), baseSize, baseSize, white),
        leftPaddle = new MomentumEngine.Classes.Rect(baseSize, baseSize, baseSize, baseSize * 7, white),
        rightPaddle = new MomentumEngine.Classes.Rect(width - (baseSize * 2), baseSize, baseSize, baseSize * 7, white);


    // Create scene graph
    pong.addChildEntity(mainScene);
    mainScene.addChildEntity(ball);
    mainScene.addChildEntity(leftPaddle);
    mainScene.addChildEntity(rightPaddle);


    // Update the ball position
    ball.state.speed = new MomentumEngine.Classes.Vector2D(0.1, 0.05); // Current ball speed

    ball.update = function (delta) {

        this.pos.add(this.state.speed.clone().multiply(delta));

        if ((this.pos.x + baseSize > width && this.state.speed.x > 0) || (this.pos.x < 0 && this.state.speed.x < 0)) {
            this.state.speed.x = -this.state.speed.x;
        }

        if ((this.pos.y + baseSize > height && this.state.speed.y > 0) || (this.pos.y < 0 && this.state.speed.y < 0)) {
            this.state.speed.y = -this.state.speed.y;
        }

    };


    // Update the left paddle according to keyboard input
    leftPaddle.update = function (delta) {

        if (pong.inputs.keyboard.isPressed(KeyConsts.CHAR_Q) || pong.inputs.keyboard.isPressed(KeyConsts.UP)) {
            leftPaddle.pos.y -= (0.5 * delta);
        }

        if (pong.inputs.keyboard.isPressed(KeyConsts.CHAR_A) || pong.inputs.keyboard.isPressed(KeyConsts.DOWN)) {
            leftPaddle.pos.y += (0.5 * delta);
        }

        if (leftPaddle.pos.y > height - (baseSize * 8)) {
            leftPaddle.pos.y = height - (baseSize * 8);
        }

        if (leftPaddle.pos.y < baseSize) {
            leftPaddle.pos.y = baseSize;
        }

        if (leftPaddle.isCollidingWith(ball) && ball.state.speed.x < 0) {
            ball.state.speed.x = -ball.state.speed.x;
        }

    };


    // Update the right paddle according to keyboard input
    rightPaddle.update = function (delta) {

        if (pong.inputs.keyboard.isPressed(KeyConsts.CHAR_O)) {
            rightPaddle.pos.y -= (0.5 * delta);
        }

        if (pong.inputs.keyboard.isPressed(KeyConsts.CHAR_L)) {
            rightPaddle.pos.y += (0.5 * delta);
        }

        if (rightPaddle.pos.y > height - (baseSize * 8)) {
            rightPaddle.pos.y = height - (baseSize * 8);
        }

        if (rightPaddle.pos.y < baseSize) {
            rightPaddle.pos.y = baseSize;
        }

        if (rightPaddle.isCollidingWith(ball) && ball.state.speed.x > 0) {
            ball.state.speed.x = -ball.state.speed.x;
        }

    };


    pong.start();


};
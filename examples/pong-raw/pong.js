"use strict";

window.onload = function () {

    var pong = new MomentumEngine.Game({
        canvas: document.getElementById("game"),
        width: 640,
        height: 360,
        fixRatio: true,
        desiredFps: 60,
        inputs: {
            keyboard: true
        }
    });


    var multiply = pong.width / 640;


    // All of these are instances of MomentumEngine.Entity;
    var mainScene = pong.createChildEntity(),
        ball = mainScene.createChildEntity(),
        leftPaddle = mainScene.createChildEntity(),
        rightPaddle = mainScene.createChildEntity();


    // Wipe the screen
    pong.render = function () {
        pong.context.fillStyle = "rgba(0, 0, 0, 1)";
        pong.context.fillRect(0, 0, pong.width, pong.height);
        return true;
    };


    // Update and render the ball
    ball.state.pos = new MomentumEngine.Vector2D(pong.width / 2, pong.height / 2); // Current ball position;
    ball.state.width = multiply * 10;
    ball.state.height = multiply * 10;
    ball.state.vector = new MomentumEngine.Vector2D(0.1, 0.05); // Current ball vector

    ball.update = function () {

        this.state.pos.add(this.state.vector.clone().multiply(pong.lastFrameDelta));

        if ((this.state.pos.x + 5 > pong.width) || (this.state.pos.x - 5 < 0)) {
            //this.state.vector.multiply(1.1);
            this.state.vector.x = -this.state.vector.x;
        }

        if ((this.state.pos.y + 5 > pong.height) || (this.state.pos.y - 5 < 0)) {
            //this.state.vector.multiply(1.1);
            this.state.vector.y = -this.state.vector.y;
        }

    };

    ball.render = function () {
        pong.context.fillStyle = "rgba(255, 255, 255, 1)";
        pong.context.fillRect(ball.state.pos.x - (ball.state.width / 2), ball.state.pos.y - (ball.state.height / 2), ball.state.width, ball.state.height);
    };


    // Update and render the left paddle
    leftPaddle.state.left = multiply * 10;
    leftPaddle.state.top = multiply * 10;
    leftPaddle.state.width = multiply * 10;
    leftPaddle.state.height = multiply * 70;

    leftPaddle.update = function () {

        if (pong.inputs.keyboard.isPressed(pong.consts.keys.CHAR_Q) || pong.inputs.keyboard.isPressed(pong.consts.keys.UP)) {
            leftPaddle.state.top -= (0.5 * pong.lastFrameDelta);
        }

        if (pong.inputs.keyboard.isPressed(pong.consts.keys.CHAR_A) || pong.inputs.keyboard.isPressed(pong.consts.keys.DOWN)) {
            leftPaddle.state.top += (0.5 * pong.lastFrameDelta);
        }

        if (leftPaddle.state.top > pong.height - (multiply * 80)) {
            leftPaddle.state.top = pong.height - (multiply * 80);
        }

        if (leftPaddle.state.top < (multiply * 10)) {
            leftPaddle.state.top = (multiply * 10);
        }

    };

    leftPaddle.render = function () {
        pong.context.fillStyle = "rgba(255, 255, 255, 1)";
        pong.context.fillRect(leftPaddle.state.left, leftPaddle.state.top, leftPaddle.state.width, leftPaddle.state.height);
    };


    // Render the right paddle
    rightPaddle.state.left = pong.width - (multiply * 10 * 2);
    rightPaddle.state.top = multiply * 10;
    rightPaddle.state.width = multiply * 10;
    rightPaddle.state.height = multiply * 70;

    rightPaddle.update = function () {

        if (pong.inputs.keyboard.isPressed(pong.consts.keys.CHAR_O)) {
            rightPaddle.state.top -= (0.5 * pong.lastFrameDelta);
        }

        if (pong.inputs.keyboard.isPressed(pong.consts.keys.CHAR_L)) {
            rightPaddle.state.top += (0.5 * pong.lastFrameDelta);
        }

        if (rightPaddle.state.top > pong.height - (multiply * 80)) {
            rightPaddle.state.top = pong.height - (multiply * 80);
        }

        if (rightPaddle.state.top < (multiply * 10)) {
            rightPaddle.state.top = (multiply * 10);
        }

    };

    rightPaddle.render = function () {
        pong.context.fillStyle = "rgba(255, 255, 255, 1)";
        pong.context.fillRect(rightPaddle.state.left, rightPaddle.state.top, rightPaddle.state.width, rightPaddle.state.height);
    };


    pong.start();

};
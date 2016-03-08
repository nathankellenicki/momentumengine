"use strict";

import MomentumEngine from "../../src/es6";


let KeyConsts = MomentumEngine.Consts.Input.Keys;

let width = 640,
    height = 360,
    baseSize = width / 64;

let white = new MomentumEngine.Classes.Color(255, 255, 255),
    black = new MomentumEngine.Classes.Color(0, 0, 0),
    red = new MomentumEngine.Classes.Color(255, 0, 0);

let font = new MomentumEngine.Classes.Font("Arial", "32px", white, red);


class Ball extends MomentumEngine.Classes.Rect {


    constructor (startingLeft, startingTop) {

        super(startingLeft, startingTop, baseSize, baseSize, white);

        this.startingLeft = startingLeft;
        this.startingTop = startingTop;
        this.speed = new MomentumEngine.Classes.Vector2D(0.1, 0.05); // Starting ball speed

    }


    update (delta) {

        this.pos.add(this.speed.clone().multiply(delta));

        if (this.left + baseSize > width && this.speed.x > 0) {

            this.left = this.startingLeft;
            this.top = this.startingTop;
            this.game.leftScoreboard.increment();

        } else if (this.left < 0 && this.speed.x < 0) {

            this.left = this.startingLeft;
            this.top = this.startingTop;
            this.game.rightScoreboard.increment();

        }

        if ((this.top + baseSize > height && this.speed.y > 0) || (this.top < 0 && this.speed.y < 0)) {
            this.speed.y = -this.speed.y;
        }

    }


}


class Paddle extends MomentumEngine.Classes.Rect {


    constructor (posLeft, keys) {

        super(posLeft, baseSize, baseSize, baseSize * 7, white);

        this.keyUp = keys.up;
        this.keyDown = keys.down;
        this.scoreboard = null;

    }


    update (delta) {

        if (this.keyUp(this, delta)) {
            this.top -= (0.5 * delta);
        } else if (this.keyDown(this, delta)) {
            this.top += (0.5 * delta);
        }

        if (this.top > height - (baseSize * 8)) {
            this.top = height - (baseSize * 8);
        } else if (this.top < baseSize) {
            this.top = baseSize;
        }

        this.balls.forEach((ball) => {
            if (this.isCollidingWith(ball)) {
                ball.speed.x = -ball.speed.x;
            }
        });

    }


}


class Scoreboard extends MomentumEngine.Classes.Text {


    constructor (posLeft) {
        super(posLeft, 35, font);
        this.score = 0;
        this.text = "Score: 0";
    }


    increment () {
        this.score++;
        this.text = `Score: ${this.score}`;
    }


}


class Pong extends MomentumEngine.Classes.Game {


    constructor (canvas, width, height) {

        super({
            canvas: canvas,
            width: width,
            height: height,
            fixRatio: true,
            desiredFps: 60,
            inputs: {
                keyboard: true,
                gamepad: true
            }
        });

        let background = new MomentumEngine.Classes.Rect(0, 0, width, height, black);
        this.addChildEntity(background);

        this.balls = [];
        this.paddles = [];

    }


    setLeftScoreboard (scoreboard) {
        this.leftScoreboard = scoreboard;
        this.addChildEntity(scoreboard);
    }

    setRightScoreboard (scoreboard) {
        this.rightScoreboard = scoreboard;
        this.addChildEntity(scoreboard);
    }


    addBall (ball) {
        ball.game = this;
        this.balls.push(ball);
        this.addChildEntity(ball);
    }


    addPaddle (paddle) {
        this.paddles.push(paddle);
        this.addChildEntity(paddle);
        paddle.balls = this.balls;
    }


}


var leftPaddleUpCondition = function (paddle, delta) {

    let gamepadInput = paddle._game.inputs.gamepad;

    let gamepadConnected = (gamepadInput.numGamepads >= 1),
        axisMoved = false;

    if (gamepadConnected) {

        let upDownAxes = gamepadInput.getGamepadById(0).getAxis(1);

        if (upDownAxes < -0.1) {
            this.top += (0.5 * delta) * upDownAxes;
            axisMoved = true;
        }

    }

    if (!axisMoved) {
        if (paddle._game.inputs.keyboard.isPressed(KeyConsts.CHAR_Q)) {
            this.top -= 0.5 * delta;
        }

    }

};


var leftPaddleDownCondition = function (paddle, delta) {

    let gamepadInput = paddle._game.inputs.gamepad;

    let gamepadConnected = (gamepadInput.numGamepads >= 1),
        axisMoved = false;

    if (gamepadConnected) {

        let upDownAxes = gamepadInput.getGamepadById(0).getAxis(1);

        if (upDownAxes > 0.1) {
            this.top += (0.5 * delta) * upDownAxes;
            axisMoved = true;
        }

    }

    if (!axisMoved) {
        if (paddle._game.inputs.keyboard.isPressed(KeyConsts.CHAR_A)) {
            this.top += 0.5 * delta;
        }

    }

};


var rightPaddleUpCondition = function (paddle, delta) {

    let gamepadInput = paddle._game.inputs.gamepad;

    let gamepadConnected = (gamepadInput.numGamepads >= 1 && gamepadInput.getGamepadById(0).numAxis >= 6),
        axisMoved = false;

    if (gamepadConnected) {

        let upDownAxes = gamepadInput.getGamepadById(0).getAxis(4);

        if (upDownAxes < -0.1) {
            this.top += (0.5 * delta) * upDownAxes;
            axisMoved = true;
        }

    }

    if (!axisMoved) {
        if (paddle._game.inputs.keyboard.isPressed(KeyConsts.CHAR_O)) {
            this.top -= 0.5 * delta;
        }

    }

};


var rightPaddleDownCondition = function (paddle, delta) {

    let gamepadInput = paddle._game.inputs.gamepad;

    let gamepadConnected = (gamepadInput.numGamepads >= 1),
        axisMoved = false;

    if (gamepadConnected) {

        let upDownAxes = gamepadInput.getGamepadById(0).getAxis(4);

        if (upDownAxes > 0.1) {
            this.top += (0.5 * delta) * upDownAxes;
            axisMoved = true;
        }

    }

    if (!axisMoved) {
        if (paddle._game.inputs.keyboard.isPressed(KeyConsts.CHAR_L)) {
            this.top += 0.5 * delta;
        }

    }

};





window.onload = function () {

    var pong = new Pong(document.getElementById("canvas"), width, height);

    var ball = new Ball((width / 2) - (baseSize / 2), (height / 2) - (baseSize / 2));

    var leftPaddle = new Paddle(baseSize, {
        up: leftPaddleUpCondition,
        down: leftPaddleDownCondition
    });

    var rightPaddle = new Paddle(width - (baseSize * 2), {
        up: rightPaddleUpCondition,
        down: rightPaddleDownCondition
    });

    var leftScoreboard = new Scoreboard(baseSize),
        rightScoreboard = new Scoreboard(width - baseSize);

    rightScoreboard.textAlign = "right"; // Right align the text of the right scoreboard

    // Create scene graph
    pong.addBall(ball);
    pong.addPaddle(leftPaddle);
    pong.addPaddle(rightPaddle);

    pong.setLeftScoreboard(leftScoreboard);
    pong.setRightScoreboard(rightScoreboard);

    pong.start();


};
"use strict";

window.onload = function () {


    var KeyConsts = MomentumEngine.Consts.Input.Keys;


    var width = 640,
        height = 360;


    var snowflakes = new MomentumEngine.Classes.Game({
        canvas: document.getElementById("canvas"),
        width: width,
        height: height,
        fixRatio: true,
        desiredFps: 60
    });


    // Colors
    var blue = new MomentumEngine.Classes.Color(204, 255, 255);


    // All of these are instances of MomentumEngine.Classes.Entity
    var mainScene = new MomentumEngine.Classes.Rect(0, 0, width, height, blue);


    // Load images
    var snowflakeImg = new MomentumEngine.Classes.ImageLoader("./snowflake.png");


    // Create scene graph
    snowflakes.addChildEntity(mainScene);

    mainScene.update = function () {

        if ((snowflakes.frameCounter % 120) == 0) { // Every two seconds or so, add a new snowflake

            var startPos = (Math.random() * width) - 50;

            var newSnowflake = new MomentumEngine.Classes.Sprite(startPos, -100, 100, 100, snowflakeImg);

            newSnowflake.update = function () {
                this.pos.y = this.pos.y + (snowflakes.lastFrameDelta * 0.06);
            };

            mainScene.addChildEntity(newSnowflake);

            mainScene.children.forEach((oldSnowflake) => {

                if (oldSnowflake.pos.y > height) {
                    mainScene.detachChildEntity(oldSnowflake);
                }

            });

        }

    };


    snowflakes.start();


};
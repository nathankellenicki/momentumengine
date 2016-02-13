"use strict";

import Entity from "./entity.js";
import Vector2D from "./vector2d.js";


class Emitter extends Entity {


    constructor (x, y, velocity, particle) {

        super(x, y);

        this.particleVelocity = velocity;
        this.particleClass = particle;
        this.emitting = false;

        this.particles = [];

        this.spread = function () {
            return Math.PI / 32;
        }

    }


    _emit () {

        if (this.emitting) {

            let ParticleClass = this.particleClass;

            let angle = this.particleVelocity.angle() + this.spread() - (Math.random() * this.spread() * 2),
                magnitude = this.particleVelocity.length(),
                velocity = Vector2D.fromAngle(angle, magnitude);

            let particle = new ParticleClass(this.pos.x, this.pos.y);
            particle.velocity = velocity;

            this.particles.push(particle);
            this._parent.addChildEntity(particle);

        }

    }


    update () {
        this._emit();
    }


}


export default Emitter;
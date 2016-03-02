"use strict";

import Entity from "./entity.js";
import Vector2D from "./vector2d.js";

import Utils from "../libs/utils";


class Emitter extends Entity {


    constructor (x, y, rate, velocity, particle) {

        super(x, y);

        this.particleVelocity = velocity;
        this.particleClass = particle;
        this.particleFields = [];

        this.rate = rate;
        this.emitting = false;
        this.spread = Math.PI;
        this._lastEmitTime = this._creationTime;
        this._wasEmitting = false;

        this._particles = [];

    }


    setParticleParent (entity) {
        this._particleParent = entity;
    }


    _emit () {

        let ParticleClass = this.particleClass,
            parent = this._particleParent || this._parent;

        let angle = this.particleVelocity.angle() + this.spread - (Math.random() * this.spread * 2),
            magnitude = this.particleVelocity.length(),
            velocity = Vector2D.fromAngle(angle, magnitude);

        // NK: This might cause a bug where child renders have an incorrect position because preprocess should normally be called after the update function but before the render, here it is before update. We'll see.
        let particle = new ParticleClass(this.relativeX, this.relativeY);
        particle.velocity = velocity;
        Utils.mergeIntoArray(particle.fields, this.particleFields);

        //this._particles.push(particle);
        parent.addChildEntity(particle);

    }


    _triggerEmissions () {

        if (this.emitting) {

            let currentTime = +(new Date());

            if (!this._wasEmitting) {
                this._wasEmitting = true;
                this._lastEmitTime = currentTime;
            }

            let emitDelta = currentTime - this._lastEmitTime;
            if (emitDelta > this.rate) {

                let emissions = ~~(emitDelta / this.rate);

                this._lastEmitTime = currentTime + (emitDelta - (this.rate * emissions));

                for (let i = 0; i < emissions; i++) {
                    this._emit();
                }

            }

        } else {
            this._wasEmitting = false;
        }

    }


    update () {
        this._triggerEmissions();
    }


}


export default Emitter;
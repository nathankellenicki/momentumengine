import Rect from "../classes/rect.js";

class CollisionMethods {


    static AABB (entity1, entity2) {

        if (!entity1 instanceof Rect || !entity2 instanceof Rect) {
            throw new Error("AABB collisions can only be checked on these entity types: Rect");
        }

        let colliding = (entity1.left < entity2.left + entity2.width &&
            entity1.left + entity1.width > entity2.left &&
            entity1.top < entity2.top + entity2.height &&
            entity1.height + entity1.top > entity2.top);

        return colliding;

    }


}


export default CollisionMethods;
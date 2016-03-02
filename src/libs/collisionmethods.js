import Rect from "../classes/rect.js";

class CollisionMethods {


    static AABB (entity1, entity2) {

        if (!entity1 instanceof Rect || !entity2 instanceof Rect) {
            throw new Error("AABB collisions can only be checked on these entity types: Rect");
        }

        return (entity1.x < entity2.x + entity2.size.x &&
            entity1.x + entity1.size.x > entity2.x &&
            entity1.y < entity2.y + entity2.size.y &&
            entity1.size.y + entity1.y > entity2.y);

    }


}


export default CollisionMethods;
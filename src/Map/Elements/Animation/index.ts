import {Mesh} from "three";

export class Animation {

    private box: Mesh;

    private static timer = 0.002 * Date.now();


    constructor(box: Mesh) {
        this.box = box;
    }

    public defaultAnimation(){
        // this.box.position.y = 0.5 + 0.5 * Math.sin(Animation.timer);
        // this.box.rotation.y += 0.0001;
    }

}
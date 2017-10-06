import {DirectionalLight, Scene} from "three";
import {Editor} from "../Editor";

export class Map {

    private scene: Scene;
    // private lights: DirectionalLight[];
    // private mainHouse: House;
    private editor: Editor;

    constructor(scene) {
        this.scene = scene;
        this.editor = new Editor();

        // this.addLights();

        // this.lights.forEach(function (s) {
        //     console.log(s);
            // scene.add(light2);
            // scene.add(light);
        // });

        // this.floor = new Flour();
        // this.scene.add(this.floor.box);

        // this.mainHouse = new House();
        // this.mainHouse.addTo(this.scene);

    }

    // private addLights() {
    //     const light = new DirectionalLight(0xffffff, 1.0);
    //     light.position.set(100, 100, 100)
    //
    //     // this.lights.push(light);
    //
    //     const light2 = new DirectionalLight(0xffffff, 1.0);
    //
    //     light2.position.set(-100, 100, -100);
    //     // this.lights.push(light2);
    // }

    public animate() {
        // this.mainHouse.animate();
    }
}
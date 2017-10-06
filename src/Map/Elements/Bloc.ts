import {BoxGeometry, Mesh, MeshBasicMaterial, Scene} from "three";
import {Animation} from "./Animation/index";

export class Bloc {
    protected box: Mesh;
    protected material: MeshBasicMaterial;
    private animation: Animation;

    private _width: number;
    private _length: number;
    private _height: number;

    constructor(width: number, length: number, height: number) {
        this.material = new MeshBasicMaterial({
            color: 0xaaaaaa
        });

        this._width = width;
        this._length = length;
        this._height = height;

        this.box = new Mesh(new BoxGeometry(this._width, this._length, this._height), this.material);
    }

    public addTo(scene: Scene) {
        scene.add(this.box);
    }

    public animate() {
        this.animation.defaultAnimation();
    }

}
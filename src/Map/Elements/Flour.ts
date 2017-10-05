import {Bloc} from "./Bloc";
import {BoxGeometry, Mesh, MeshBasicMaterial} from "three";
import {Animation} from "./Animation/index";

export class Flour extends Bloc {
    private _box: Mesh;

    protected material: MeshBasicMaterial;
    private animation: Animation;
    constructor() {
        super();

        this.material = new MeshBasicMaterial({
            color: 0xaaaaaa
        });

        this._box = new Mesh(new BoxGeometry(10, 0.1, 10), this.material);

        this.animation = new Animation(this._box);

        this.config();
    }

    get box(): Mesh {
        return this._box;
    }

    public animate() {
        this.animation.defaultAnimation();
    }

    private config() {
        this._box.position.x = 0.5;
        this._box.rotation.y = 0.5;
    }
}
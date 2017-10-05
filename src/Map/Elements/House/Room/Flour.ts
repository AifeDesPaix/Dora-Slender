import {BoxGeometry, Mesh, MeshBasicMaterial} from "three";
import {Bloc} from "../../Bloc";
import {Animation} from "../../Animation/index";

export class Flour extends Bloc {
    protected _box: Mesh;

    protected material: MeshBasicMaterial;
    private animation: Animation;
    private width: number;
    private length: number;

    constructor(width: number, length: number) {
        super();

        this.width = width;
        this.length = length;

        this.material = new MeshBasicMaterial({
            color: 0xaaaaaa
        });

        this._box = new Mesh(new BoxGeometry(this.length, 0.1, this.width), this.material);

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
        // this._box.position.x = 0.5;
        // this._box.rotation.y = 0.5;
    }
}
import {Bloc} from "../../Bloc";
import {BoxGeometry, Mesh, MeshBasicMaterial} from "three";
import {Animation} from "../../Animation/index";

export class Wall extends Bloc  {
    private width: number;
    private height: number;
    private _box: Mesh;
    protected material: MeshBasicMaterial;


    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;

        this.material = new MeshBasicMaterial({
            color: 0xaa2233
        });

        this._box = new Mesh(new BoxGeometry(this.width, this.height, 0.1), this.material);

        this.config();
    }

    private config() {
        // this._box.position.y = 0.5;
    }

    get box(): Mesh {
        return this._box;
    }
}
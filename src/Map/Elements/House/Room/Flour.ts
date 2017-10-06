import {Mesh, MeshBasicMaterial} from "three";
import {Bloc} from "../../Bloc";
import {Animation} from "../../Animation/index";

export class Flour extends Bloc {

    private width: number;
    private length: number;

    constructor(width: number, length: number) {
        super(length, 0.1, width);

        this.width = width;
        this.length = length;
    }

}
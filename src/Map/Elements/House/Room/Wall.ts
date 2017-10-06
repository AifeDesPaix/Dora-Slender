import {Bloc} from "../../Bloc";

export class Wall extends Bloc  {

    constructor(width: number, height: number) {
        super(width, 0.1, height);

        this.material.color.setHex(0xaa2233);

        this.config();
    }

    private config() {
        // this._box.position.y = 0.5;
    }

}
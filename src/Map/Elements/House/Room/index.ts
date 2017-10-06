import {Wall} from './Wall'
import {Flour} from './Flour'
import {Scene, Vector3} from "three";

export class Room {

    private _width: number;
    private _length: number;
    private _height: number;

    private walls: Wall[];
    private flour: Flour;

    constructor(width: number, length: number, height: number) {
        this._width = width;
        this._length = length;
        this._height = height;

        this.addWalls();

        this.flour = new Flour(width, length);
    }

    public addTo(scene: Scene) {
        this.flour.addTo(scene);

        for (let i = 0; i < this.walls.length; i++) {
            this.walls[i].addTo(scene);
        }
    }

    private addWalls() {
        // this.walls = [
        //     new Wall(this._length, this._height),
        //     new Wall(this._length, this._height),
        //     new Wall(this._width, this._height),
        //     new Wall(this._width, this._height)
        // ];
        //
        // this.walls[0].box.position.y = this._height/2;
        // this.walls[1].box.position.y = this._height/2;
        // this.walls[2].box.position.y = this._height/2;
        // this.walls[3].box.position.y = this._height/2;
        //
        // this.walls[0].box.position.z = -this._width/2;
        // this.walls[1].box.position.z = this._width/2;
        //
        // this.walls[2].box.rotation.y = Math.PI / 2;
        // this.walls[3].box.rotation.y = Math.PI / 2;
        //
        // this.walls[2].box.position.x = this._length/2;
        // this.walls[2].box.position.x = this._length/2;
        // this.walls[3].box.position.x = this._length/2;
        // this.walls[3].box.position.x = -this._length/2;
    }

    public animate() {
        this.flour.animate();
    }
}
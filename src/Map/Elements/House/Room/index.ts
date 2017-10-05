import {Wall} from './Wall'
import {Flour} from './Flour'
import {Scene, Vector3} from "three";

export class Room {

    private width: number;
    private length: number;
    private height: number;

    private walls: Wall[];
    private flour: Flour;

    constructor(width: number, length: number, height: number) {
        this.width = width;
        this.length = length;
        this.height = height;

        this.addWalls();

        this.flour = new Flour(width, length);
    }

    private addWalls() {
        this.walls = [
            new Wall(this.length, this.height),
            new Wall(this.length, this.height),
            new Wall(this.width, this.height),
            new Wall(this.width, this.height)
        ];

        this.walls[0].box.position.y = this.height/2;
        this.walls[1].box.position.y = this.height/2;
        this.walls[2].box.position.y = this.height/2;
        this.walls[3].box.position.y = this.height/2;

        this.walls[0].box.position.z = -this.width/2;
        this.walls[1].box.position.z = this.width/2;

        this.walls[2].box.rotation.y = Math.PI / 2;
        this.walls[3].box.rotation.y = Math.PI / 2;

        this.walls[2].box.position.x = this.length/2;
        this.walls[2].box.position.x = this.length/2;
        this.walls[3].box.position.x = this.length/2;
        this.walls[3].box.position.x = -this.length/2;
        // this.walls[1].box.position.y = this.height/2;
        // this.walls[1].box.position.z = this.width/2;
        // this.walls[1].box.rotation.z = 10;
        // this.walls[1].box.position.y = -this.width/2;
        // this.walls[2].box.position.x = this.height/2;
        // this.walls[3].box.position.x = -this.height/2;
    }

    public addTo(scene: Scene) {
        console.log(this.flour.box);
        scene.add(this.flour.box);

        for (let i = 0; i < this.walls.length; i++) {
            console.log(this.walls[i]);
            scene.add(this.walls[i].box);
        }
    }

    public animate() {
        this.flour.animate();
    }
}
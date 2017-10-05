import {Room} from './Room';
import {Scene} from "three";

export class House {

    private entree: Room;

    constructor() {
        this.entree = new Room(10, 15, 5);
    }

    public addTo(scene: Scene) {
       this.entree.addTo(scene);
    }

    animate() {
        this.entree.animate();
    }
}
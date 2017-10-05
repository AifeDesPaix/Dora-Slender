// add style
import './style.css'
import {SlenderDora} from "./SlenderDora";

const game = new SlenderDora();

function animate(): void {
	requestAnimationFrame(animate)
	render()
}

function render(): void {
	game.animate();
	game.renderer.render(game.scene, game.camera)
}

animate();

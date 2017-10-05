// add styles
import './style.css'
// three.js
import * as THREE from 'three'
import {OrbitControls} from "three-orbitcontrols-ts";
import {SlenderDora} from "./SlenderDora";

// SlenderDora.start();


// // create the scene
// let scene = new THREE.Scene()
//
// let renderer = new THREE.WebGLRenderer()
// // create the camera
// let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
// const controls = new OrbitControls(camera, renderer.domElement);
//
// function configControlCamera(controls: OrbitControls) {
//     // How far you can orbit vertically, upper and lower limits.
//     controls.minPolarAngle = 0;
//     controls.maxPolarAngle = Math.PI;
//
//
//     // How far you can dolly in and out ( PerspectiveCamera only )
//     controls.minDistance = 0;
//     controls.maxDistance = Infinity;
//
//     controls.enableZoom = true; // Set to false to disable zooming
//     controls.zoomSpeed = 1.0;
//     console.log(this);
//
//     controls.enablePan = true; // Set to false to disable panning (ie vertical and horizontal translations)
//
//     controls.enableDamping = true; // Set to false to disable damping (ie inertia)
//     controls.dampingFactor = 0.25;
// }
//
// // set size
// renderer.setSize(window.innerWidth, window.innerHeight)
//
// // add canvas to dom
// document.body.appendChild(renderer.domElement)
//
// // add axis to the scene
// let axis = new THREE.AxisHelper(10)
//
// scene.add(axis)
//
// // add lights
// let light = new THREE.DirectionalLight(0xffffff, 1.0)
//
// light.position.set(100, 100, 100)
//
// scene.add(light)
//
// let light2 = new THREE.DirectionalLight(0xffffff, 1.0)
//
// light2.position.set(-100, 100, -100)
//
// scene.add(light2)
//
// let material = new THREE.MeshBasicMaterial({
// 	color: 0xaaaaaa,
// 	wireframe: true
// })
//
// // create a box and add it to the scene
// let box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material)
//
// scene.add(box)
//
// box.position.x = 0.5
// box.rotation.y = 0.5
//
// camera.position.x = 5
// camera.position.y = 5
// camera.position.z = 5
//
// camera.lookAt(scene.position)
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

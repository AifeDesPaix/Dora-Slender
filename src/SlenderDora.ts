import {OrbitControls} from "three-orbitcontrols-ts";
import {Map} from "./Map/index";
import * as THREE from "three";
import {DirectionalLight, PerspectiveCamera, Scene, WebGLRenderer} from "three";

export class SlenderDora {

    private _scene: Scene;

    private _renderer: WebGLRenderer;

    private _camera: PerspectiveCamera;
    private cameraControls: OrbitControls;

    private lights: [DirectionalLight];

    private map: Map;
    private debug: boolean;

    constructor() {
        this.debug = true;

        this._scene = new THREE.Scene();
        this.map = new Map(this._scene);

        this._renderer = new THREE.WebGLRenderer();
        this.configRenderer();

        // create the camera
        this._camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.configCamera();

        this.addDebugOptions();
    }

    get renderer(): WebGLRenderer {
        return this._renderer;
    }

    get camera(): PerspectiveCamera {
        return this._camera;
    }

    get scene(): Scene {
        return this._scene;
    }

    private configRenderer() {
        // set size
        this._renderer.setSize(window.innerWidth, window.innerHeight);
        // add canvas to dom
        document.body.appendChild(this._renderer.domElement);
    }

    public animate() {
        this.map.animate();
    }

    public static start(game: SlenderDora) {
        requestAnimationFrame(game.rendering);
    }

    private rendering() {
        this._renderer.render(this._scene, this._camera);
    }

    private configCamera() {
        this.cameraControls = new OrbitControls(this._camera, this._renderer.domElement);

        // How far you can orbit vertically, upper and lower limits.
        this.cameraControls.minPolarAngle = 0;
        this.cameraControls.maxPolarAngle = Math.PI;


        // How far you can dolly in and out ( PerspectiveCamera only )
        this.cameraControls.minDistance = 0;
        this.cameraControls.maxDistance = Infinity;

        this.cameraControls.enableZoom = true; // Set to false to disable zooming
        this.cameraControls.zoomSpeed = 1.0;

        this.cameraControls.enablePan = true; // Set to false to disable panning (ie vertical and horizontal translations)

        this.cameraControls.enableDamping = true; // Set to false to disable damping (ie inertia)
        this.cameraControls.dampingFactor = 0.25;

        this._camera.position.x = 5;
        this._camera.position.y = 5;
        this._camera.position.z = 5;

        this._camera.lookAt(this._scene.position);
    }


    addDebugOptions(): any {

        if (!this.debug) {
            return false;
        }
        // add axis to the scene
        let axis = new THREE.AxisHelper(10);

        this._scene.add(axis)
    }
}
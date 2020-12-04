//bring the canvas into JS

let canvas = document.getElementById("canvas");

let engine = new BABYLON.Engine(canvas, true);
var camera;

let scene = createScene();

engine.runRenderLoop(function (){
    scene.render();
})

function createScene() {
    // Create the scene space
    var scene = new BABYLON.Scene(engine);

    // Add a camera to the scene and attach it to the canvas
    camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    let light = new BABYLON.DirectionalLight("Light", new BABYLON.Vector3(0,.5,1), scene);
    let ground = BABYLON.MeshBuilder.CreateGround("ground", {height: 4, width: 4, subdivisions: 4}, scene);

    return scene;
};
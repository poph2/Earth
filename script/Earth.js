"use strict";

var canvas;
var engine;
var scene;

document.addEventListener("DOMContentLoaded", startBabylonJS, false);

function startBabylonJS() {
  if (BABYLON.Engine.isSupported()) {
    canvas = document.getElementById("renderCanvas");
    engine = new BABYLON.Engine(canvas, true);

    // Resize
    window.addEventListener("resize", function () {
        engine.resize();
    });

    // Scene, light and camera
    var scene = new BABYLON.Scene(engine);
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2, Math.PI / 2, 200, new BABYLON.Vector3(0, 0, 0), scene);
    camera.attachControl(canvas);

    // Assets manager
    var assetsManager = new BABYLON.AssetsManager(scene);

    //var meshTask = assetsManager.addMeshTask("skull task", "", "skull/", "skull.babylon");
    //var meshTask2 = assetsManager.addMeshTask("skull task", "", "skull/", "skull.babylon");
    //var meshTask3 = assetsManager.addMeshTask("skull task", "", "skull/", "skull.babylon");

    // You can handle success and error on a per-task basis (onSuccess, onError)
    //meshTask.onSuccess = function (task) {
        //task.loadedMeshes[0].position = new BABYLON.Vector3(0, 0, 0);
    //}
    //meshTask2.onSuccess = function (task) {
    //    task.loadedMeshes[0].position = new BABYLON.Vector3(70, 0, 0);
    //}
    //meshTask3.onSuccess = function (task) {
    //    task.loadedMeshes[0].position = new BABYLON.Vector3(-70, 0, 0);
    //}

    //Earth
    var sphere = BABYLON.Mesh.CreateSphere("Sphere", 20, 70, scene);

    // But you can also do it on the assets manager itself (onTaskSuccess, onTaskError)
    assetsManager.onTaskError = function (task) {
        console.log("error while loading " + task.name);
    }

    assetsManager.onFinish = function (tasks) {
        engine.runRenderLoop(function () {
          //Camera to revolve
          scene.activeCamera.alpha += .01

          scene.render();
        });
    };



    // Can now change loading background color:
    engine.loadingUIBackgroundColor = "Purple";

    // Just call load to initiate the loading sequence
    assetsManager.load();
  }
}

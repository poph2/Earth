
document.addEventListener("DOMContentLoaded", startBabylonJS, false);

function startBabylonJS() {
  if (BABYLON.Engine.isSupported()) {
    var canvas = document.getElementById("renderCanvas");
    var engine = new BABYLON.Engine(canvas, true);

    var scene = new BABYLON.Scene(engine);
    scene.collisionsEnabled = true;

    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);
    camera.setPosition(new BABYLON.Vector3(-15, 3, 0));
    camera.attachControl(canvas);
    camera.checkCollisions = true;

    var light = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(-17.6, 0, 0), scene);
    var light2 = new BABYLON.PointLight("Omni1", new BABYLON.Vector3(-17.6, 10, 0), scene);
    var light3 = new BABYLON.PointLight("Omni2", new BABYLON.Vector3(-17.6, -10, 0), scene);

    light.diffuse = new BABYLON.Color3(1, 1, 1);
    light.specular = new BABYLON.Color3(0, 0, 0);

    light2.diffuse = new BABYLON.Color3(1, 1, 1);
    light2.specular = new BABYLON.Color3(0, 0, 0);

    light3.diffuse = new BABYLON.Color3(1, 1, 1);
    light3.specular = new BABYLON.Color3(0, 0, 0);

    var sun1 = BABYLON.Mesh.CreateSphere("sun", 10, 4, scene);
    sun1.material = new BABYLON.StandardMaterial("sun", scene);
    sun1.material.emissiveColor = new BABYLON.Color3(1, 1, 0);
    sun1.position = light.position;

    var sun2 = BABYLON.Mesh.CreateSphere("sun", 10, 4, scene);
    sun2.material = new BABYLON.StandardMaterial("sun", scene);
    sun2.material.emissiveColor = new BABYLON.Color3(1, 1, 0);
    sun2.position = light2.position;

    var sun3 = BABYLON.Mesh.CreateSphere("sun", 10, 4, scene);
    sun3.material = new BABYLON.StandardMaterial("sun", scene);
    sun3.material.emissiveColor = new BABYLON.Color3(1, 1, 0);
    sun3.position = light3.position;
    //var light = new BABYLON.HemisphericLight("light0", new BABYLON.Vector3(0, 1, 0), scene);
    //var light2 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, -1, 0), scene);

    var sphere = BABYLON.Mesh.CreateSphere("sphere1", 20, 3, scene);
    var sphere2 = BABYLON.Mesh.CreateSphere("sphere2", 20, 3, scene);
    var sphere3 = BABYLON.Mesh.CreateSphere("sphere3", 20, 3, scene);

    sphere.position.z = 0;
    sphere2.position.z = 4;
    sphere3.position.z = -4;

    sphere.checkCollisions = true;
    sphere2.checkCollisions = true;
    sphere3.checkCollisions = true;

    var mat = new BABYLON.StandardMaterial("default", scene);

    mat.diffuseTexture = new BABYLON.Texture("material/earth.jpg", scene);
    //mat.diffuseTexture.uScale = 2.0;
    //mat.diffuseTexture.vScale = 2.0;

        sphere.material = mat;
        sphere2.material = mat;
        sphere3.material = mat;

    //var ground = BABYLON.Mesh.CreateGround("ground1", 100, 100, 2, scene);

    engine.runRenderLoop(function () {
        //scene.activeCamera.alpha += .01;
        sphere.rotation.y += 0.03;
        sphere2.rotation.y += 0.03;
        sphere3.rotation.y += 0.03;
        scene.render();
    });

    // Resize
    window.addEventListener("resize", function () {
        engine.resize();
    });

    engine.loadingUIBackgroundColor = "Purple";
  }
}

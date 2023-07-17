import { createCamera } from './components/camera.js';
import { createAxesHelper, createGridHelper } from './components/helpers.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { Train } from './components/Train/Train.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

let camera;
let scene;
let renderer;
let loop ;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer) ;
    container.append(renderer.domElement);

    const controls = createControls(camera, renderer.domElement) ;
    const train = new Train() ;
    const train2 = new Train() ;
    const train3 = new Train() ;

    //const cube = createCube(); 
    // Modified to return an array of cubes
    const { ambientLight, mainLight } = createLights() ;

    train2.position.z += 3 ;
    train3.position.z -= 3 ;

    //loop.updatables.push(cube) ;
    loop.updatables.push(controls, train, train2, train3) ;

    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;

    scene.add(ambientLight, mainLight, train, train2, train3);
  
    const resizer = new Resizer(container, camera, renderer);

    scene.add(createAxesHelper(), createGridHelper());
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start() ;
  }

  stop() {
    loop.stop() ;
  }
}

export { World };

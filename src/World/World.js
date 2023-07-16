import { createCamera } from './components/camera.js';
import { createMeshGroup } from './components/meshGroup.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

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
    const meshGroup = createMeshGroup() ;

    //const cube = createCube(); 
    // Modified to return an array of cubes
    const { ambientLight, mainLight } = createLights() ;

    //loop.updatables.push(cube) ;

    loop.updatables.push(controls, meshGroup) ;

    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;

    scene.add(ambientLight, mainLight, meshGroup);
  
    const resizer = new Resizer(container, camera, renderer);
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

import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
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

    const cube = createCube(); // Modified to return an array of cubes
    const { ambientLight, mainLight } = createLights() ;

    //loop.updatables.push(cube) ;
    controls.target.copy(cube.position) ;

    loop.updatables.push(controls) ;

    controls.addEventListener('change', () => {
      renderer.render(scene, camera);
    });

    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;

    scene.add(cube);
    scene.add(ambientLight, mainLight);
  
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

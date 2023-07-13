import { MathUtils } from 'three';
import { OrbitControls } from '../../three/examples/jsm/controls/OrbitControls.js';

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas) ;

  controls.enableDamping = true ;
  controls.minDistance = 5 ;
  controls.maxDistance = 20 ;

  controls.dampingFactor = 0.7 ;

  controls.tick = () => controls.update() ;

  return controls ;
}

export { createControls };
import { DirectionalLight } from "../../three/build/three.module.js" ;

function createLights() {
  const light = new DirectionalLight('white', 1) ;

  // move the light right, up, and towards us
  light.position.set(10, 10, 10);

  return light ;
}

export { createLights } ;
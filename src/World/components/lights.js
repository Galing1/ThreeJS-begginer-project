import { AmbientLight, DirectionalLight, HemisphereLight } from "../../three/build/three.module.js" ;

function createLights() {
  const directionalLight = new DirectionalLight('black', 2) ;
  const ambientLight = new AmbientLight('white', 1) ;
  const mainLight = new HemisphereLight('black', 'darkslategrey', 2, {x: 1,  y: 1, z: 1}) ;

  // move the light right, up, and towards us
  mainLight.position.set(10, 10, 10);

  return { mainLight, ambientLight, directionalLight } ;
}

export { createLights } ;
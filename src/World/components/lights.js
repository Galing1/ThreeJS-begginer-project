import { AmbientLight, DirectionalLight, HemisphereLight } from "../../three/build/three.module.js" ;

function createLights() {
  const ambientLight = new AmbientLight('white', 1) ;
  const mainLight = new HemisphereLight('white', 1) ;

  // move the light right, up, and towards us
  mainLight.position.set(10, 10, 10);

  return { mainLight, ambientLight } ;
}

export { createLights } ;
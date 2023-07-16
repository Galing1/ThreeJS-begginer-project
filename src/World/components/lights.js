import { AmbientLight, DirectionalLight, HemisphereLight } from "../../three/build/three.module.js" ;

function createLights() {
  const ambientLight = new HemisphereLight(
    'white',
    'darkslategray',
    10,
  );

  const mainLight = new DirectionalLight('white', 5);
  mainLight.position.set(10, 10, 10);

  return { ambientLight, mainLight };
}

export { createLights } ;
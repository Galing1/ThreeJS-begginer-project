import { WebGLRenderer } from "../../three/build/three.module.js" ;

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true}) ;

  // turn on the physically correct lighting model
  renderer.useLegacyLights = true;

  return renderer ;
}

export { createRenderer } ;
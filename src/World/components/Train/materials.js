import { MeshStandardMaterial } from "../../../three/build/three.module.js" ;

function createMaterials() {
  const body = new MeshStandardMaterial({
    color: 'firebrick',
    flatShading: true 
  }) ;
  const detail = new MeshStandardMaterial({
    color: 'darkslategray',
    flatShading: true
  }) ;
  const out = new MeshStandardMaterial({
    color: 'white',
    flatShading: true 
  }) ;
  const trackSide = new MeshStandardMaterial({
    color: 'black',
    flatShading: true 
  }) ;
  const trackRail = new MeshStandardMaterial({
    color: 'chocolate',
    flatShading: true 
  }) ;
  
  return { body, detail, out, trackSide, trackRail } ;
}

export { createMaterials } ;
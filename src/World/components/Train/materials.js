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
  //#eebb99
  const humanFace = new MeshStandardMaterial({
    color: 'blue'
  }) ;
  const humanBody = new MeshStandardMaterial({
    color: 'yellow'
  }) ;
  const humanLeg = new MeshStandardMaterial({
    color: 'blue'
  }) ;
  const smoke = new MeshStandardMaterial({
    color: '#B0C4DE'
  }) ;
  const cloud = new MeshStandardMaterial({
    color: 'white'
  }) ;
  
  return { body, detail, out, trackSide, trackRail, humanFace, humanBody, humanLeg, smoke, cloud } ;
}

export { createMaterials } ;
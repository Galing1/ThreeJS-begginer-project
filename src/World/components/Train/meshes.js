import { Mesh } from "../../../three/build/three.module.js" ;

import { createGeometries } from "./geometries.js";
import { createMaterials } from "./materials.js";

function createMeshes() {
  const geometry = createGeometries() ;
  const material = createMaterials() ;

  const cabin = new Mesh(geometry.cabin, material.body) ;
  cabin.position.set(1.5, 1.4, 0);

  const chimney = new Mesh(geometry.chimney, material.detail) ;
  chimney.position.set(-2, 1.9, 0);

  const nose = new Mesh(geometry.nose, material.body) ;
  nose.position.set(-1, 1, 0);
  nose.rotation.z = Math.PI / 2;

  const smallWheelRear = new Mesh(geometry.wheel, material.detail) ;
  smallWheelRear.position.y = 0.5 ;
  smallWheelRear.rotation.x = Math.PI / 2 ;

  const smallWheelCenter = smallWheelRear.clone() ;
  smallWheelCenter.position.x = -1 ;

  const smallWheelFront = smallWheelRear.clone() ;
  smallWheelFront.position.x = -2 ;

  const bigWheel = smallWheelRear.clone() ;
  bigWheel.position.set(1.5, 0.9, 0) ;
  bigWheel.scale.set(2, 1.25, 2) ;

  return { 
    cabin, 
    chimney, 
    nose, 
    smallWheelRear, 
    smallWheelCenter, 
    smallWheelFront, 
    bigWheel 
  } ;
}

export { createMeshes } ;
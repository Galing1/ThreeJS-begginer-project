import { Mesh } from "../../../three/build/three.module.js" ;

import { createGeometries } from "./geometries.js";
import { createMaterials } from "./materials.js";

function createMeshes() {
  const geometry = createGeometries() ;
  const material = createMaterials() ;

  const trackRailArray = [] ;

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

  const window = new Mesh(geometry.window, material.out) ;
  window.position.set(1.6, 1.6, 0.75);

  const window2 = new Mesh(geometry.window, material.out) ;
  window2.position.set(1.6, 1.6, -0.75);

  const trackSide = new Mesh(geometry.trackSide, material.trackSide) ;
  trackSide.rotation.x = Math.PI / 2 ;
  trackSide.rotation.z = Math.PI / 2 ;
  trackSide.position.set(0, 0, -1.25);

  const trackSide2 = new Mesh(geometry.trackSide, material.trackSide) ;
  trackSide2.rotation.x = Math.PI / 2 ;
  trackSide2.rotation.z = Math.PI / 2 ;
  trackSide2.position.set(0, 0, 1.25);

  const trackRail = new Mesh(geometry.trackRail, material.trackRail) ;
  trackRail.rotation.x = Math.PI / 2 ;
  trackRail.position.set(-2, 0, 0);

  let trackRail2 ;
  
  for (let i = -2 ; i < 2 ; i++) {
    trackRail2 = trackRail.clone() ;
    trackRail2.position.x = i + 1 ;

    trackRailArray.push(trackRail2) ;

    console.log('hi') ;
  }

  return { 
    cabin, 
    chimney, 
    nose, 
    smallWheelRear, 
    smallWheelCenter, 
    smallWheelFront, 
    bigWheel, 
    window,
    window2,
    trackSide,
    trackSide2,
    trackRail,
    trackRail2: trackRailArray
  } ;
}

export { createMeshes } ;
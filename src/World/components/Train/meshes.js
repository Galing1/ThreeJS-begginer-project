import { Mesh, Group } from "../../../three/build/three.module.js" ;

import { createGeometries } from "./geometries.js";
import { createMaterials } from "./materials.js";

function createMeshes() {
  const geometry = createGeometries() ;
  const material = createMaterials() ;

  const trackRailArray = [] ;
  const humanArray = [] ;
  const smokeArray = [] ;
  const cloudArray = [] ;

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

  const human = new Group() ;

  const humanFace = new Mesh(geometry.humanFace, material.humanFace) ;
  humanFace.position.set(2, 2.5, 2) ;

  const humanBody = new Mesh(geometry.humanBody, material.humanBody) ;
  humanBody.position.set(2, 1.65, 2) ;
  humanBody.rotation.x = Math.PI / 2 ;
  humanBody.rotation.y = Math.PI / 2 ;

  const humanLeg = new Mesh(geometry.humanLeg, material.humanLeg) ;
  humanLeg.position.set(2.1, 0.65, 2.15) ;
  const humanLeg2 = new Mesh(geometry.humanLeg, material.humanLeg) ;
  humanLeg2.position.set(2.1, 0.65, 1.85) ;

  human.add(humanFace, humanBody, humanLeg, humanLeg2) ;

  human.position.x -= 1 ;

  let human2 ;

  for (let i = 1 ; i < 4 ; i++) {
    human2 = human.clone() ;
    human2.position.x -= i ;

    humanArray.push(human2) ;
  }

  const smokes = new Group() ;

  const smoke = new Mesh(geometry.smoke, material.smoke) ;
  smoke.position.y = 2.3 ;
  smoke.position.x -= 1.9 ;

  smokes.add(smoke) ;

  let smoke2 ;

  for (let i = 0.2 ; i <= 0.4 ; i += 0.2) {
    smoke2 = smokes.clone() ;
    smoke2.position.z -= 0.1 ;
    smoke2.position.x -= i ;

    if (i == 0.4) {
      smoke2.position.z += 0.2 ;
      smoke2.position.x += 0.2 ;
    }

    smokeArray.push(smoke2) ;
  }

  const cloudGroup = new Group();

  const cloudBig = new Mesh(geometry.cloudBig, material.cloud);
  cloudBig.position.y = 5;

  const cloudBig2 = cloudBig.clone();
  cloudBig2.position.x += 0.8;
  cloudBig2.position.z = -1;
  cloudBig2.position.y += 0.3;

  const cloudSmall = new Mesh(geometry.cloudSmall, material.cloud);
  cloudSmall.position.y = 5;
  cloudSmall.position.z = -1;

  const cloudSmall2 = cloudSmall.clone();
  cloudSmall2.position.y += 0.8;
  cloudSmall2.position.x = 1;
  cloudSmall2.position.z = -0.3;

  const cloudTiny = new Mesh(geometry.cloudTiny, material.cloud);
  cloudTiny.position.y = 5;
  cloudTiny.position.z = -1.75;

  const cloudTiny2 = cloudTiny.clone();
  cloudTiny.position.z = 1.15;

  cloudGroup.add(cloudBig, cloudSmall, cloudTiny, cloudBig2, cloudSmall2, cloudTiny2);
  
  cloudArray.push(cloudBig, cloudSmall, cloudTiny, cloudBig2, cloudSmall2, cloudTiny2);

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
    trackRail2: trackRailArray, 
    humanFace,
    humanBody,
    humanLeg,
    humanLeg2,
    human2: humanArray,
    smoke,
    smoke2: smokeArray,
    cloudBig,
    cloudSmall,
    cloudTiny,
    cloudBig2,
    cloudSmall2,
    cloudTiny2,
    cloudGroup: cloudArray
  } ;
}

export { createMeshes } ;
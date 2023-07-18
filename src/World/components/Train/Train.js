import { Group, MathUtils } from "../../../three/build/three.module.js" ; 

import { createMeshes } from "./meshes.js" ;

const wheelSpeed = MathUtils.degToRad(24) ;

class Train extends Group {
  constructor() {
    super();

    this.meshes = createMeshes();

    this.add(
      this.meshes.cabin,
      this.meshes.chimney,
      this.meshes.nose,
      this.meshes.smallWheelRear,
      this.meshes.smallWheelCenter,
      this.meshes.smallWheelFront,
      this.meshes.bigWheel,
      this.meshes.window,
      this.meshes.window2,
      this.meshes.trackSide,
      this.meshes.trackSide2,
      this.meshes.trackRail,
      this.meshes.humanFace,
      this.meshes.humanBody,
      this.meshes.humanLeg,
      this.meshes.humanLeg2,
      this.meshes.smoke,
      this.meshes.cloudBig,
      this.meshes.cloudSmall,
      this.meshes.cloudTiny,
      this.meshes.cloudBig2,
      this.meshes.cloudSmall2,
      this.meshes.cloudTiny2
    );

    // Add each human from humanArray to the group
    for (const human of this.meshes.human2) {
      this.add(human);
    }

    for (const smokes of this.meshes.smoke2) {
      this.add(smokes);
    }

    for (const clouds of this.meshes.cloudGroup) {
      this.add(clouds);
    }
  }

  tick(delta) {
    this.meshes.bigWheel.rotation.y += wheelSpeed * delta;
    this.meshes.smallWheelRear.rotation.y += wheelSpeed * delta;
    this.meshes.smallWheelCenter.rotation.y += wheelSpeed * delta;
    this.meshes.smallWheelFront.rotation.y += wheelSpeed * delta;

    this.meshes.smoke.position.y += 1 * delta ;
    if (this.meshes.smoke.position.y > 4) {
      this.meshes.smoke.position.y = 2.3 ;
    }

    for (const smokes of this.meshes.smoke2) {
      smokes.position.y += 1 * delta ;
      if (smokes.position.y > 1.7) {
        smokes.position.y = 0 ;
      }
    }

    for (const clouds of this.meshes.cloudGroup) {
      clouds.position.z += 0.5 * delta ;
      if (clouds.position.z > 3) {
        clouds.position.z = -3 ;
      }
    }
  }
}


export { Train } ;
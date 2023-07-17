import { Group, MathUtils } from "../../../three/build/three.module.js" ; 

import { createMeshes } from "./meshes.js" ;

const wheelSpeed = MathUtils.degToRad(24) ;

class Train extends Group {
  constructor() {
    super() ;

    this.meshes = createMeshes() ;

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
      this.meshes.trackRail
    ) ;
  }

  tick(delta) {
    this.meshes.bigWheel.rotation.y += wheelSpeed * delta;
    this.meshes.smallWheelRear.rotation.y += wheelSpeed * delta;
    this.meshes.smallWheelCenter.rotation.y += wheelSpeed * delta;
    this.meshes.smallWheelFront.rotation.y += wheelSpeed * delta;
  }
}

export { Train } ;
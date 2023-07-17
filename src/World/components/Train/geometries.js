import { BoxGeometry, CylinderGeometry } from "../../../three/build/three.module.js" ;

function createGeometries() {
  const cabin = new BoxGeometry(2, 2.25, 1.5) ;

  const nose = new CylinderGeometry(0.75, 0.75, 3, 12) ;

  const wheel = new CylinderGeometry(0.4, 0.4, 1.75, 16) ;

  const chimney = new CylinderGeometry(0.3, 0.1, 0.5) ;

  const window = new BoxGeometry(1.3, 1.25, 0.1) ;

  const trackSide = new CylinderGeometry(0.1, 0.1, 6, 16) ;

  const trackRail = new CylinderGeometry(0.1, 0.1, 2, 16) ;
 
  return { cabin, nose, wheel, chimney, window, trackSide, trackRail } ;
}

export { createGeometries } ;
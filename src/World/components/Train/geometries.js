import { BoxGeometry, CylinderGeometry, SphereGeometry } from "../../../three/build/three.module.js" ;

function createGeometries() {
  const cabin = new BoxGeometry(2, 2.25, 1.5) ;

  const nose = new CylinderGeometry(0.75, 0.75, 3, 12) ;

  const wheel = new CylinderGeometry(0.4, 0.4, 1.75, 16) ;

  const chimney = new CylinderGeometry(0.3, 0.1, 0.5) ;

  const window = new BoxGeometry(1.3, 1.25, 0.1) ;

  const trackSide = new CylinderGeometry(0.1, 0.1, 6, 16) ;

  const trackRail = new CylinderGeometry(0.1, 0.1, 2, 16) ;

  const humanFace = new SphereGeometry(0.45, 16, 16) ;

  const humanBody = new BoxGeometry(1, 1, 0.5) ;

  const humanLeg = new CylinderGeometry(0.1, 0.1, 1.2, 16) ;

  const smoke = new SphereGeometry(0.1, 16, 16) ;

  const cloudBig = new SphereGeometry(1, 16, 16) ;

  const cloudSmall = new SphereGeometry(0.75, 16, 16) ;

  const cloudTiny = new SphereGeometry(0.5, 16, 16) ;
 
  return { cabin, nose, wheel, chimney, window, trackSide, trackRail, humanFace, humanBody, humanLeg, smoke, cloudBig, cloudSmall, cloudTiny } ;
}

export { createGeometries } ;
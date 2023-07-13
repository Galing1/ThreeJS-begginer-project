import {
  BoxGeometry,
  Mesh,
  MeshStandardMaterial,
  Vector3,
  Euler,
  MathUtils,
  TextureLoader
} from "../../three/build/three.module.js";

function createMaterial() {
  const textureLoader = new TextureLoader() ;
  const texture = textureLoader.load(
    'assets/textures/uv-test.png',
  ) ;

  const material = new MeshStandardMaterial({ map: texture });

  return material ;
}

function createCube() {
  const geometry = new BoxGeometry(2, 2.2, 2);
  const material = createMaterial() ;

  const geometry2 = new BoxGeometry(2, 2, 2);
  const radiansPS = MathUtils.degToRad(30) ;

  const cube = new Mesh(geometry, material);
  const position = new Vector3(2, 2, 0);
  const euler = new Euler(1, 2, 3);

  cube.rotation.set(-1, -0.1, 0.8);
  cube.position.z = 1 ;

  cube.tick = (delta) => {
    cube.rotation.z += radiansPS * delta ;
    cube.rotation.x += radiansPS * delta ;
    cube.rotation.y += radiansPS * delta ;
  }

  return cube;
}

export { createCube };

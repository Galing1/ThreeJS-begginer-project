import { PerspectiveCamera, Vector3, Euler, Quaternion } from "../../three/build/three.module.js";

function createCamera() {
  const camera = new PerspectiveCamera(
    35, // fov = Field Of View
    1, // aspect ratio (dummy value)
    0.1, // near clipping plane
    100 // far clipping plane
  );

  // move the camera back so we can view the scene
  const position = new Vector3(0, -0.1, 8.5);
  camera.position.copy(position);

  const rotationEuler = new Euler(0, 0, 0); // Initial Euler rotation
  const rotationQuaternion = new Quaternion().setFromEuler(rotationEuler); // Convert Euler to Quaternion
  camera.quaternion.copy(rotationQuaternion); // Set camera rotation using Quaternion
  
  return camera;
}

export { createCamera };

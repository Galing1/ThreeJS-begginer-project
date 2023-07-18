import { Mesh, Group } from "../../../three/build/three.module.js";

import { createGeometries } from "./geometries.js";
import { createMaterials } from "./materials.js";

function createClouds() {
  const geometry = createGeometries();
  const material = createMaterials();

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

  return { cloudBig, cloudSmall, cloudTiny, cloudBig2, cloudSmall2, cloudTiny2, cloudGroup };
}

export { createClouds };

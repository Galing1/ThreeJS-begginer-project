import { createCamera } from "./camera.js";

function createButtonAnimation() {
  const button = document.querySelector('.js-button') ;
  const camera = createCamera() ;

  button.tick = () => {
    camera.position.y += 1 ;
  }

  button.addEventListener('click', () => {
    button.tick() ;
  })

  return button ;
}

export { createButtonAnimation } ;

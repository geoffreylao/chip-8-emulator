import Renderer from "./renderer";

const renderer = new Renderer(10);

let loop: number;

let fps = 60, fpsInterval: number, startTime, now, then: number, elapsed;

function init(){
  fpsInterval = 1000/fps;
  then = Date.now();
  startTime = then;

  renderer.testRender();
  renderer.render()

  loop = requestAnimationFrame(step);
  console.log(loop)
}

function step(){
  now = Date.now();
  elapsed = now - then;

  if (elapsed > fpsInterval){

  }

  loop = requestAnimationFrame(step);
}

init()
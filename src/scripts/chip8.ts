import Renderer from './renderer';
import Keyboard from './keyboard';
import Speaker from './speaker';
import CPU from './cpu';

const renderer = new Renderer(10);
const keyboard = new Keyboard();
const speaker = new Speaker();
const cpu = new CPU(renderer, keyboard, speaker);

let loop: number;

let fps = 60,
  fpsInterval: number,
  startTime,
  now,
  then: number,
  elapsed;

function init() {
  fpsInterval = 1000 / fps;
  then = Date.now();
  startTime = then;

  // renderer.testRender();
  // renderer.render();

  cpu.loadSpritesIntoMemory();
  cpu.loadRom('/BLINKY');
  loop = requestAnimationFrame(step);
}

function step() {
  now = Date.now();
  elapsed = now - then;

  if (elapsed > fpsInterval) {
    cpu.cycle();
  }

  loop = requestAnimationFrame(step);
}

init();

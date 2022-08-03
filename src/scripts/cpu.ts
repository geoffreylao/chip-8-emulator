class CPU {
  renderer: any;
  keyboard: any;
  speaker: any;
  memory: Uint8Array;
  v: Uint8Array;
  delayTimer: number;
  soundTimer: number;
  pc: number;
  stack: any[];
  paused: boolean;
  speed: number;

  constructor(renderer: any, keyboard: any, speaker: any){
    this.renderer = renderer;
    this.keyboard = keyboard;
    this.speaker = speaker;

    this.memory = new Uint8Array(4096);

    this.v = new Uint8Array(16);
    
    this.i = 0;

    this.delayTimer = 0;
    this.soundTimer = 0;

    this.pc = 0x200;

    this.stack = new Array();

    this.paused = false;

    this.speed = 10;
  }

  loadSpritesIntoMemory() {
    // Array of hex values for each sprite. Each sprite is 5 bytes.
    // The technical reference provides us with each one of these values.
    const sprites = [
        0xF0, 0x90, 0x90, 0x90, 0xF0, // 0
        0x20, 0x60, 0x20, 0x20, 0x70, // 1
        0xF0, 0x10, 0xF0, 0x80, 0xF0, // 2
        0xF0, 0x10, 0xF0, 0x10, 0xF0, // 3
        0x90, 0x90, 0xF0, 0x10, 0x10, // 4
        0xF0, 0x80, 0xF0, 0x10, 0xF0, // 5
        0xF0, 0x80, 0xF0, 0x90, 0xF0, // 6
        0xF0, 0x10, 0x20, 0x40, 0x40, // 7
        0xF0, 0x90, 0xF0, 0x90, 0xF0, // 8
        0xF0, 0x90, 0xF0, 0x10, 0xF0, // 9
        0xF0, 0x90, 0xF0, 0x90, 0x90, // A
        0xE0, 0x90, 0xE0, 0x90, 0xE0, // B
        0xF0, 0x80, 0x80, 0x80, 0xF0, // C
        0xE0, 0x90, 0x90, 0x90, 0xE0, // D
        0xF0, 0x80, 0xF0, 0x80, 0xF0, // E
        0xF0, 0x80, 0xF0, 0x80, 0x80  // F
    ];

    // According to the technical reference, sprites are stored in the interpreter section of memory starting at hex 0x000
    for (let i = 0; i < sprites.length; i++) {
        this.memory[i] = sprites[i];
    }
  }

  loadProgramIntoMemory(program: any[]){
    for(let loc = 0; loc < program.length; loc++){
      this.memory[0x200 + loc] = program[loc]
    }
  }
}

export default CPU;
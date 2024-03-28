class Z {
  #x1;
  #y1;
  #x2;
  #y2;
  #x3;
  #y3;
  #rate;

  constructor(x1, y1, x2, y2, x3, y3, rate) {
    this.#x1 = x1;
    this.#y1 = y1;
    this.#x2 = x2;
    this.#y2 = y2;
    this.#x3 = x3;
    this.#y3 = y3;
    this.#rate = rate;
  }

  start() {
    if (this.#x1 <= 200) {
      this.#x1 += this.#rate;
    }

    if (this.#x2 >= 0 && this.#y2 != 200) {
      this.#x2 -= this.#rate;
      this.#y2 += this.#rate;
    }

    if (this.#x3 >= 0) {
      this.#x3 -= this.#rate;
    }

    circle(this.#x1, this.#y1, 20);
    circle(this.#x2, this.#y2, 20);
    circle(this.#x3, this.#y3, 20);
  }
}

let z;

function setup() {
  createCanvas(1900, 940, WEBGL);
  describe("A white square spins around on gray canvas.");
  z = new Z(0, 0, 200, 0, 200, 200, 2);
}

function draw() {
  z.start();
}

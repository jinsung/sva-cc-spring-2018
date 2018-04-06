class Mover {
  constructor(){
    //rectMode(CENTER);
    this.loc = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
  }

  update() {
    this.acc.set(0.015, 0.002, 0);
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.acc.mult(0);

    if (this.loc.x > width) {
      this.loc.x = 0;
    }
    if (this.loc.y > height) {
      this.loc.y = 0;
    }
  }

  display() {
    textSize(100);
    text('H', this.loc.x, this.loc.y);
//    ellipse(this.loc.x, this.loc.y, 30);
  }
}

class Particle{
  constructor(loc) {
    this.loc = loc.copy();
    this.acc = createVector(0, 0);
    this.vel = createVector(0, 0);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.mult(0.97);
    this.acc.mult(0);
  }

  display() {
    fill(0);
    noStroke();
    ellipse(this.loc.x, this.loc.y, 20, 20);
  }
}

class Particle {
  constructor(loc, size) {
    this.loc = loc.copy();
    this.size = size;
    this.acc = createVector(0, 0);
    this.vel = createVector(0, 0);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.mult(0.98);
    this.acc.mult(0);
  }

  display() {
    ellipse(this.loc.x, this.loc.y, this.size);
  }
}

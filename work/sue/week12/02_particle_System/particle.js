class Particle {
  constructor(loc, size) {
    this.loc = loc.copy();
    this.size = size;
    this.acc = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.isDead = false;
    this.age = 0;
    this.lifeSpan = random(60, 110);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.mult(0.97);
    this.acc.mult(0);
    this.age++;
    if (this.age >= this.lifeSpan) {
      this.isDead = true;
    }
  }

  display() {
    noStroke();
    fill(100, 100, 255);
    ellipse(this.loc.x, this.loc.y, 10, 10);
  }
}

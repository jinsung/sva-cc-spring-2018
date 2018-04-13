class Particle {
  constructor(loc, size, texture) {
    this.loc = loc.copy();
    this.size = size;
    this.acc = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.lifeSpan = 100 + random(50);
    this.age = 0;
    this.isDead = false;
    this.texture = texture;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.mult(0.98);
    this.acc.mult(0);
    this.age++;
    //this.vel.limit(4);

    if (this.age > this.lifeSpan) {
      this.isDead = true;
    }
  }

  display() {
    noStroke();
    var life = (this.lifeSpan-this.age)/this.lifeSpan
    fill(255, 255 * life);
    //ellipse(this.loc.x, this.loc.y, this.size * life);
//    this.size = 0.1;
    image(this.texture, this.loc.x, this.loc.y, this.size * life, this.size * life);
  }
}

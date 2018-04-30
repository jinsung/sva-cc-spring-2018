class Particle{
  constructor(loc) {
    this.loc = loc.copy()
    this.acc = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.isDead = false;
    this.age = 0;
    this.lifeSpan = random (60, 110);
    this.size = 10;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.mult(.30);
    this.acc.mult(0);
    this.age++;
    if (this.age >= this.lifeSpan) {
      this.isDead = true;
    }
  }

  display(){
    var life = (this.lifeSpan - this.age) / this.lifeSpan;
    fill(16,6,235);
    var size = this.size * life;
    rect(this.loc.x, this.loc.y, size, size);
    var life = (this.lifeSpan - this.age) / this.lifeSpan;
    fill(0,11,236);
    var size = this.size * life;
    ellipse(this.loc.x, this.loc.y, size, size)
    var life = (this.lifeSpan - this.age) / this.lifeSpan;
    fill(189,235,4);
    var size = this.size * life;
    ellipse(this.loc.x, this.loc.y, size, size);

  }
}

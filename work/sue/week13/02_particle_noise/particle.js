class Particle {
  constructor(loc, size) {
    this.loc = loc.copy();
    this.size = size;
    this.acc = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.isDead = false;
    this.age = 0;
    this.lifeSpan = random(60, 110);
    this.size = 10;
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
    var life = (this.lifeSpan - this.age) / this.lifeSpan;
    var size = this.size * life;
    var myRandomNumR;
    var myRandomNumG;
    var myRandomNumB;
    myRandomNumR = random(200);
    myRandomNumG = random(255);
    myRandomNumB = random(225);
    noStroke();
    fill(life * myRandomNumR, life * myRandomNumG, life * myRandomNumB);
    ellipse(this.loc.x, this.loc.y, size, size);
  }
}

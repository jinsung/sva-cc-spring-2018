class Particle {
  constructor(loc) {
  this.loc = loc.copy();
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
    this.acc.mult(0); // apply once --> mouse click
    this.age++;
    if (this.age >= this.lifeSpan) {
      this.isDead = true;
    }
  }

  display() {
    var life = (this.lifeSpan - this.age) / this.lifeSpan;
    var size = this.size * life;
    noStroke();
    fill(life * 255);
    //fill(random(100, 255), 0, random(0, 100));
    ellipse(this.loc.x, this.loc.y, size, size );
    /*push();
    translate(this.loc.x, this.loc.y);
    //text("A", 0, 0);
    pop();*/
  }

}

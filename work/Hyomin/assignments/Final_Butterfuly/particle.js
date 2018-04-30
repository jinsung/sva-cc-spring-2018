class Particle {
  constructor(loc, size) {
    this.loc = loc.copy();
    this.size = size;
    this.acc = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.lifeSpan = 10+ random(1000);
    this.age = 0;
    this.isDead = false;
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
    fill(mouseX+100, mouseY ,100);

      ellipse(this.loc.x, this.loc.y, this.size);

      ellipse(mouseX,mouseY,10,50);

      ellipse(mouseX-25,mouseY -5,40,40);
      ellipse(mouseX-20,mouseY+20,30,30);

      ellipse(mouseX+25,mouseY -5,40,40);
      ellipse(mouseX+20,mouseY+20,30,30);


  }
}

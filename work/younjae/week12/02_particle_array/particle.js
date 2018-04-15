class Particle {
  constructor(loc) {
    //built in
    this.loc = loc.copy();
    this.acc = createVector(0, 0);
    this.vel = createVector(0, 0);


  }

  applyForce(force) {
    this.acc.add(force);

  }

  update(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.mult(0.96);
    this.acc.mult(0);


  }

  display() {
    ellipse(this.loc.x, this.loc.y, 20, 20);
    fill(90, 0, 200);

  }
}

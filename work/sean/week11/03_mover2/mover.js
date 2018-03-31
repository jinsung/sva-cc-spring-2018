class Mover {
  constructor() {
     this.loc = createVector(width/2, height/2);
     this.vel = createVector(0, 0);
     this.acc = createVector(0, 0);
  }

  applyForce(force){
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.mult(.98)
    this.acc.mult(0);

    if (this.loc.y > height){
      this.loc.y = height;
      this.vel.y *= -1;
    }

    if (this.loc.x > width){
      this.loc.x = width;
      this.vel.x *= -1;
    }

  }

  display() {
    ellipse(this.loc.x, this.loc.y, 30, 30);
  }
}

class Mover {
  constructor() {
    this.loc = createVector(width/2, height/2);
    this.vel = createVector(0,0);
    this.acc = createVector(0, 0.1);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.mult(0.98);
    this.acc.mult(0);

    /*if (this.loc.y > height){
      this.loc.y = 0;
    } else if ( this.loc.y < 0 ) {
      this.loc.y = height;
    }

    if (this.loc.x > width) {
      this.loc.x = 0;
    } else if ( this.loc.x < 0) {
      this.loc.x = width;
    }*/

  }

  display() {
    ellipse(this.loc.x, this.loc.y, 30, 30);
  }
}

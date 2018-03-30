class Mover {
  constructor(location, size, char){
    //rectMode(CENTER);
    this.loc = location;
    this.size = size;
    this.char = char;
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
  }

  addForce(force) {
    this.acc.add(force);
  }

  update() {

    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.acc.mult(0);
    this.vel.limit(2);
    this.vel.mult(0.98);


  }

  checkBound() {
    if (this.loc.x > width) {
      this.loc.x = 0;
    } else if (this.loc.x < 0) {
      this.loc.x = width;
    }
    if (this.loc.y > height) {
      this.loc.y = 0;
    } else if(this.loc.y < 0) {
      this.loc.y = height;
    }
  }

  display() {
    push()
    translate(this.loc.x, this.loc.y);
    rotate(this.vel.heading());
    textSize(this.size);
    text(this.char, 0, 0);
    //ellipse(0, 0, this.size);
    pop();

  }
}

class Particle {
  //passing the vector into the parameter
  constructor(loc){
    //this.loc is the location
    //loc.copy to create larger particles
    //particle's location
    this.loc = loc.copy(); //copy of the location
    this.acc = createVector(0, 0);
    this.vel = createVector(0, 0);
  }

  applyForce(force){
    //add force to acceleration
    this.acc.add(force);
  }


  update() {
    //add acceleration or power to velocity
    this.vel.add(this.acc);

    //add velocity = moving
    this.loc.add(this.vel);

    //slows down velocity = friction
    this.vel.mult(0.9);

    //no more force because it happens once
    this.acc.mult(0);
  }

  display() {
    ellipse(this.loc.x, this.loc.y, 20, 20);
  }
}

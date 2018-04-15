class Particle {
  //passing the vector into the parameter
  constructor(loc){
    //this.loc is the location
    //loc.copy to create larger particles
    //particle's location
    this.loc = loc.copy(); //copy of the location
    this.acc = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.isDead = false;
    this.age = 0;
    this.lifeSpan = random(60, 110);
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
    this.vel.mult(0.97);

    //no more force because it happens once
    this.acc.mult(0);
    this.age++;
    if(this.age >= this.lifeSpan){
      this.isDead = true;
    }
  }

  display() {
  //  ellipse(this.loc.x, this.loc.y, 20, 20);
    push();
    translate(this.loc.x, this.loc.y);
    rotate(this.vel.heading());
    text("A", 0, 0);
    pop();
  }
}

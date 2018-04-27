class Particle{
  constructor(loc){
    // we are goning to crate lot's of particles so we need copy
    this.loc = loc.copy();
    this.acc = createVector(0,0);
    this.vel = createVector(0,0);
}

  applyForce(force){
    this.acc.add(force);

  }

  update(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
// add friction by making velocity <1
    this.vel.mult(0.98);
    this.acc.mult(0);
// except gravity, every force just apply once, so *0
  }


  display(){
    noStroke();
    ellipse(this.loc.x,this.loc.y,35,35);
  }
}

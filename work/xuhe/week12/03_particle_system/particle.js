class Particle{
  constructor(loc){
    // we are goning to crate lot's of particles so we need copy
    this.loc = loc.copy();
    this.acc = createVector(0,0);
    this.vel = createVector(0,0);
    this.isDead = false;
    this.age = 0;
    this.lifeSpan = random (60,110);
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
    this.age++;
    // age keep adding on
    if(this.age>=this.lifeSpan){
      this.isDead= true;

    }
  }


  display(){
    noStroke();
    fill(255,255*((this.lifeSpan-this.age)/this.lifeSpan))
    ellipse(this.loc.x,this.loc.y,5,5);
  }
}

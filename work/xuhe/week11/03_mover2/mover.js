class Mover{
  constructor(){
    // all the new vectors we can add
    this.loc = createVector(width/2,height/2);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
}


// apply force? another function?
  applyForce(force){
    this.acc.add(force);
  }


  update(){
    // FORCE IS acceleration!!
    // YOU CAN MAKE MULTIPLE FORCES ON THE SAME OBJECT!!
    // add velocity to the location
    //this.loc.x=this.loc.x+this.vel.x;
    //acceleration 0.2= means slowing down , means gravity
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.mult(0.98);
    this.acc.mult(0);

    // finally stop accelerate, velocity keeps the same
    //0.998= putting gravity, so the ball finally stops
    // accleration <1= slow down


    if(this.loc.y>height){
      this.loc.y=height;
      this.vel.y*=-1;
    }

    if(this.loc.x>width){
      this.loc.x=width;
      this.vel.x*=-1;
    }

  }

  display(){
    ellipse(this.loc.x,this.loc.y,40,40);
  }
}

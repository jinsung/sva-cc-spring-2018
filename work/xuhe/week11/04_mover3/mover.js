class Mover{
  constructor(location){
    // all the new vectors we can add
    this.loc = location;
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
}


// apply force? another function?
  applyForce(force){
    this.acc.add(force);
  }

  update(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.mult(0.9);
    this.acc.mult(0);


    if(this.loc.y>height){
          this.loc.y=0;
    } else if(this.loc.y<0){
      this.loc.y=height;
    }

    if(this.loc.x>width){
          this.loc.x=0;
    } else if(this.loc.x<0){
      this.loc.x=width;
    }


  }

  display(){
    ellipse(this.loc.x,this.loc.y,40,40);
  }
}

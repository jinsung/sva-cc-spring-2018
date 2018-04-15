class ParticleSystem {
  constructor(){
    this.particles = [];

  }

  addParticles (numOfParticles, loc){
    for(var i = 0; i < numOfParticles; i++){

      var particle = new Particle(loc);
      //to move the particles
      particle.applyForce(createVector(random(-10, 40), random(-20, 20)));
      //creating the array of particles
      this.particles.push(particle);

    }
  }

  update(){
    //last index is 49, not 50
    //therefore length needs to subtract 1
    for(var i = this.particles.length-1; i >= 0; i--){
      var gravity = createVector(0, 0.1);
  //    this.particles[i].applyForce(gravity);
      this.particles[i].update();

      if(this.particles[i].isDead){
        //to replace the index i to 1
        this.particles.splice(i, 1);
      }
    }

  }

  display(){
    for(var i = 0; i < this.particles.length; i++){
      this.particles[i].display();
    }
  }

}

class particleSystem {

  constructor(){
    this.particles = [];
}

  addParticles(numOfParticles,location){
    for (var i=0; i<numOfParticles;i++){
      var particle = new Particle(location);
      // apply Force
      particle.applyForce(createVector(random(-10,10),random(-10,10)));
      this.particles.push(particle);
    }
  }


   update() {
      for (var i = this.particles.length-1; i >= 0; i--) {
        var particle = this.particles[i];
        particle.update();
        if (particle.isDead) {
          this.particles.splice( i, 1 );
        }
      }
    }

    display() {
      for (var i = this.particles.length-1; i >= 0; i--) {
        var particle = this.particles[i];
        particle.display();
      }
    }
  }

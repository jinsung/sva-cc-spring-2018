class ParticleSystem {
  constructor() {
    this.particles = [];
  }

  addParticles ( numOfParticles, loc) {
    for (var i = 0; i < numOfParticles; i++) {
      var particle = new Particle(loc);
      particle.applyForce(createVector(random(-10, 10), random(-10, 10)));
      this.particles.push(particle);
    }
  }

  update(){
    for (var i = this.particles.length-1; i >= 0; i--){
      var gravity = createVector (0,0.1);
      //this.particles[i].applyForce(gravity);
      this.particles[i]
    }
  }

  display() {
    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].display();
    }
  }
}

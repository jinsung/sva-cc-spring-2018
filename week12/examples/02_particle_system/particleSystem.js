class ParticleSystem {

  constructor() {
    this.particles = [];
  }

  addParticles (numOfParticles, location) {
    var r = 2;
    for (var i = 0; i < numOfParticles; i++) {
      var particle = new Particle(location, 5);
      var twoPI = Math.PI * 2;
      var xForce = Math.cos(i/numOfParticles * twoPI);
      var yForce = Math.sin(i/numOfParticles * twoPI);
      particle.applyForce(createVector(xForce * random(r), yForce * random(r)));
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

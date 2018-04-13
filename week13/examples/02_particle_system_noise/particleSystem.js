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
      particle.applyForce(createVector(xForce * random(r), yForce * random(r)).mult(1));
      this.particles.push(particle);
    }
  }

  update() {
    var currentMillis = Date.now() * 0.0002;
    for (var i = this.particles.length-1; i >= 0; i--) {
      var particle = this.particles[i];
      var n = noise(particle.loc.x * 0.001, particle.loc.y  * 0.001, currentMillis) * 15;
      //console.log(n);
      var xForce = Math.cos(n);
      var yForce = Math.sin(n);
      particle.applyForce(createVector(xForce, yForce).mult(0.02));

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

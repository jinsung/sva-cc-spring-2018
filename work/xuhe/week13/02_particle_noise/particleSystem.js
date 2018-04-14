class particleSystem {

  constructor(){
    this.particles = [];
}

  addParticles(numOfParticles,location){
    for (var i=0; i<numOfParticles;i++){
      var particle = new Particle(location);
      var segment = i/ (numOfParticles-1)*(Math.PI *2);
      var power= random(1,3);
      var xForce =  Math.cos(segment)*power;
      var yForce = Math.sin(segment)*power;
      // apply Force
      particle.applyForce(createVector(xForce,yForce));
      this.particles.push(particle);
    }
  }


   update() {
      var millis = Date.now()* 0.0002;
      for (var i = this.particles.length-1; i >= 0; i--) {
        var gravity = createVector(0,0.1);
        var p = this.particles[i];
        var nMult = 0.001;
        var n = noise(p.loc.x * nMult,p.loc.y * nMult, millis)* 15;
        var xForce =  Math.cos(n);
        var yForce = Math.sin(n);
        var nForce = createVector(xForce,yForce);
        this.particles[i].applyForce(nForce);
        this.particles[i].update();


        if (this.particles[i].isDead) {
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

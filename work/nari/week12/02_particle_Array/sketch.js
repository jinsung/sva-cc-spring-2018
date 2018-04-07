var particles;

function setup() {
  createCanvas(500, 500);
  particles = [];

  for (var i = 0; i < 200; i++) {
    var particle = new Particle(createVector(width/2, height/2));
    particle.applyForce(createVector(random(-10,10), random(-10,10) ));
    //particles[i] = particle; //this
    particles.push(particle); //and this is the same.
  }
}

function draw() {
  background(2);
  for (var i = 0; i < particles.length; i++){
    var particle = particles[i];
    particle.applyForce(createVector(0, 0.1));
    particle.update();
    particle.display();
  }

}

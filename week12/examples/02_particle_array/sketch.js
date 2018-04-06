var particles;
function setup() {
  createCanvas(500, 500);
  smooth();
  particles = [];
  var r = 10;
  for (var i = 0; i < 100; i++) {
    var particle = new Particle(createVector(width/2, height/2), 20);
    particle.applyForce(createVector(random(-r, r), random(-r, r)));
    particles.push(particle);
  }
}

function draw() {
  background(100);
  for (var i = 0; i < particles.length; i++) {
    var particle = particles[i];
    particle.update();
    particle.display();
  }
}

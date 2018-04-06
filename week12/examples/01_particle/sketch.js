var particle;
function setup() {
  createCanvas(500, 500);
  smooth();
  particle = new Particle(createVector(width/2, height/2), 20);
}

function draw() {
  background(100);
  var r = 0.01;
  particle.applyForce(createVector(random(-r, r), random(-r, r)));
  particle.update();
  particle.display();
}

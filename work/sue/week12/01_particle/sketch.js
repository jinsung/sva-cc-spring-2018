var particles;
// F = 1 * A (Acc)

function setup() {
  createCanvas(500, 500);
  particles =[];
  for (var i = 0; i < 50; i++) {
    particles[i] = new Particle(createVector(width/2, height/2, 20));
    particles[i].applyForce(createVector(random(-10, 10), random(-10, 10)));
  }
}

function draw() {
  background(200);
  for (var i = 0; i < particles.length; i++) {
  particles[i].applyForce(createVector(0, 0.1));
    particles[i].update();
    particles[i].display();
  }
}

var ps;

function setup() {
  createCanvas(500, 500);
  ps = new ParticleSystem();
}

function draw() {
  background(0);
  noStroke();
  ps.update();
  ps.display();
  if (isMousePressed) {
    ps.addParticles( 40, createVector(mouseX, mouseY));
  }
}

var ps;

function setup() {
  createCanvas(500, 500);
  ps = new ParticleSystem();
}

function draw() {
  background(255,250,34);
  noStroke();
  ps.update();
  ps.display();
  if (isMousePressed) {
    ps.addParticles( 20, createVector(mouseX, mouseY));
  }
}

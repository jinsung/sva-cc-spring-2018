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
    ps.addParticles(20, createVector(mouseX, mouseY));
  }
}

function mousePressed() {
  ps.addParticles(random(30, 80), createVector(mouseX, mouseY));
}

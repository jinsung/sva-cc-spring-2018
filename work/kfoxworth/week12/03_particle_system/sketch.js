var ps;

function setup() {
 createCanvas(500, 500);
 ps = new ParticleSystem();

}

function draw() {
  background(50);
  noStroke();
  fill(0, 255, 0);
  ps.update();
  ps.display();
}

function mousePressed() {
  ps.addParticles(random(30, 80), createVector(mouseX, mouseY));
}

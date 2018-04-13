var particleSystem;
function setup() {
  createCanvas(500, 500);
  smooth();

  particleSystem = new ParticleSystem();
}

function draw() {
  background(100);
  if (particleSystem) {
    particleSystem.update();
    particleSystem.display();
  }
}

function mousePressed () {
  particleSystem.addParticles(100 , createVector(mouseX, mouseY));
}

var particleSystem;
function setup() {
  createCanvas(500, 500);
  smooth();

  particleSystem = new ParticleSystem();
}

function draw() {
  background(0);
  if (particleSystem) {
    particleSystem.update();
    particleSystem.display();

    if (isMousePressed) {
      particleSystem.addParticles(20, createVector(mouseX, mouseY));
    }
  }
}

var particleSystem;
function setup() {
  createCanvas(500, 500);
  smooth();

  particleSystem = new ParticleSystem();
}

function draw() {
  background(0);
  noStroke();
  if (particleSystem) {
    particleSystem.update();
    particleSystem.display();
  }

  if(isMousePressed){
    particleSystem.addParticles(100, createVector(mouseX, mouseY));
  }
}

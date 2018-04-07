var ps;
// F = 1 * A


function setup() {
  createCanvas(500, 500);
  ps = new ParticleSystem();





}

function draw() {
  background(60, 150, 80);
    ps.update();
    ps.display();
  }

function mousePressed () {
  ps.addParticles(random(30, 80), createVector(mouseX, mouseY));
  }

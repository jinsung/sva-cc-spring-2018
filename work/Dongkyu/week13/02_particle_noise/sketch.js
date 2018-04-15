var ps;
// F = 1 * A


function setup() {
  createCanvas(1000, 500);
  ps = new ParticleSystem();





}

function draw() {
  background(0);
    noStroke();
    ps.update();
    ps.display();
    if (isMousePressed) {
      ps.addParticles( 20, createVector(mouseX, mouseY));
    }
  }

/*function mousePressed () {
  ps.addParticles(random(30, 80), createVector(mouseX, mouseY));
}*/

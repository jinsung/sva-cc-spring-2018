var ps;
// F = 1 * A (Acc)

function setup() {
  createCanvas(500, 500);
  ps = new ParticleSystem();
}

function draw() {
  background(240);
  ps.update();
  ps.display();
}

function mousePressed(){
    ps.addParticles(random(30, 80),
                    createVector(mouseX, mouseY) );
}

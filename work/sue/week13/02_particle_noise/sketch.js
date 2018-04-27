var ps;
// F = 1 * A (Acc)

function setup() {
  createCanvas(1000, 2000);
  ps = new ParticleSystem();
}

function draw() {
  background(0);
  ps.update();
  ps.display();
  if(isMousePressed){
    ps.addParticles (20, createVector(mouseX, mouseY))
  }
}

function mousePressed(){
    ps.addParticles(random(30, 80),
                    createVector(mouseX, mouseY) );
}

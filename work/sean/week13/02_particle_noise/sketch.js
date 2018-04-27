var ps

function setup() {
  createCanvas(windowWidth, windowHeight);
  ps = new ParticleSystem();

}

function draw() {
  background(240);
  noCursor();

  noStroke();
  ps.update();
  ps.display();
  if (isMousePressed){
    ps.addParticles(20, createVector(mouseX, mouseY));
  }
}

/*
function mousePressed(){
  ps.addParticles(random(30,80), createVector(mouseX, mouseY));

}
*/

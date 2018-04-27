var ps;

function setup() {
  createCanvas(1980, 1080);
  ps = new ParticleSystem();
  colorMode(255);
}

function draw() {
  background(0);
  fill(255);
  fill(150,150,150,150);
  noStroke();
  rect(720,300,20,1500);
  rect(680,450,100,1500);
  rect(630,500,200,1500);
  rect(580,600,300,1500);

  noStroke();
  ps.update();
  ps.display();
  if (isMousePressed) {
    ps.addParticles( 40, createVector(mouseX, mouseY));
  }
}

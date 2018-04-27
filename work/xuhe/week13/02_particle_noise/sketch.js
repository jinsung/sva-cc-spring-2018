var ps;

function setup(){
  createCanvas(500,500);
  ps = new particleSystem();
}


function draw(){
  background(0);
  noStroke();
  ps.update();
  ps.display();
  if (isMousePressed){
    ps.addParticles(20,createVector(mouseX,mouseY));
  }
}

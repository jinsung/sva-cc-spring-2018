var ps;

function setup(){
  createCanvas(500,500);
  ps = new particleSystem();
}


function draw(){
  background(0);
  ps.update();
  ps.display();
}


function mousePressed(){
  ps.addParticles(random(30,80),createVector(mouseX,mouseY));

}

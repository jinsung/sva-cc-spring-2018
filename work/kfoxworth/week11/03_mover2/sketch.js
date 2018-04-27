var mover;

function setup() {
 createCanvas(500, 500);
 mover = new Mover();

}

function draw() {
  background(30);
  noStroke();
  fill(0, 255, 0);
  mover.update();
  mover.display();
  if (mouseIsPressed) {
    addMouseForce();
  }
  
}

function addMouseForce() {
  var mouseLoc = createVector(mouseX, mouseY);
  var moverLoc = mover.loc;
  var diffLoc = mouseLoc.sub(moverLoc);
  diffLoc.mult(0.003);
  mover.applyForce(diffLoc);
}

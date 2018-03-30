var mover;
function setup() {
  createCanvas(500, 500);
  mover = new Mover();
}

function draw() {
  background(200);
  mover.update();
  mover.display();

  addMouseLocForce()
}

function addMouseLocForce (){
  var moverLoc = mover.loc.copy();
  var mouseLoc = createVector(mouseX, mouseY);
  var diff = mouseLoc.sub(moverLoc  );
  diff.mult(0.01);
  mover.addForce(diff);
}

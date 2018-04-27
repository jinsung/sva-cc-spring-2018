var mover;
function setup(){
  createCanvas(500,500);
  mover = new Mover();

}


// add mouseForce
function addMouseForce(){
  var mouseLoc = createVector(mouseX,mouseY);
  var moverLoc = mover.loc;
  var diffLoc = mouseLoc.sub(moverLoc);
  diffLoc.mult(0.0005);
  mover.applyForce(diffLoc);
}


function draw(){
  background(0);
  mover.update();
  mover.display();
if(mouseIsPressed){
    addMouseForce();
  }

  addMouseForce();
}

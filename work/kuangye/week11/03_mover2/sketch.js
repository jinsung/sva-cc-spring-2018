var mover;
function setup(){
 createCanvas(500, 500);
 mover = new Mover();
}

function draw() {
 background(200);
 mover.update();
 mover.display();

 addMouseForce();
 }

 function addMouseForce(){
   var mouseLoc = createVector(mouseX, mouseY);
   var moverLoc = mover.loc;
   var diffLoc = mouseLoc.sub(moverLoc);
   diffLoc.mult(0.09);
   mover.applyForce(diffLoc)
 }

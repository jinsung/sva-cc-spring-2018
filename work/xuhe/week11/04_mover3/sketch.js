// two variables
var lover;
var hater;

function setup(){
  createCanvas(500,500);
  lover = new Mover(createVector(100,height/2));
  hater = new Mover(createVector(400,height/2));
}


function addLoverForce(){
  // add .copy()
  var haterLoc = hater.loc.copy();
  var loverLoc = lover.loc.copy();
  var diffLoc = haterLoc.sub(loverLoc);
  diffLoc.mult(0.003);
  lover.applyForce(diffLoc);
}


function addHaterForce(){
 // from hater's perspective, it's inverse
  var haterLoc = hater.loc.copy();
  var loverLoc = lover.loc.copy();
  var diffLoc = loverLoc.sub(haterLoc);
  // when it get close it moves away. add mag
  if(diffLoc.mag()<50){
    diffLoc.mult(-0.3);
    hater.applyForce(diffLoc);
  }
}


function draw(){
  background(0);
  fill(255,0,0);
  lover.update();
  lover.display();

  fill(0,0,255);
  hater.update();
  hater.display();

  addLoverForce();
  addHaterForce();

}

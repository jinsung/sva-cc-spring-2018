var lover
var hater

function setup() {
  createCanvas(500, 500);
  lover = new Mover(createVector(100, height/2));
  hater = new Mover(createVector(400, height/2));
}

function draw() {
  background(200);

  fill(255, 0, 0);
  lover.update();
  lover.display();

  fill(0,255, 0);
  hater.update();
  hater.display();

  addLoverForce();
  addHaterForce();

}



function addLoverForce() {
  var haterLoc = hater.loc.copy();
  var loverLoc = lover.loc.copy();
  var diffLoc = haterLoc.sub(loverLoc);
  diffLoc.mult(0.003);
  lover.applyForce(diffLoc);
}

function addHaterForce() {
  var haterLoc = hater.loc.copy();
  var loverLoc = lover.loc.copy();
  var diffLoc = loverLoc.sub(haterLoc);
  if (diffLoc.mag() < 40){
    diffLoc.mult(-0.3);
    hater.applyForce(diffLoc);
  }
}

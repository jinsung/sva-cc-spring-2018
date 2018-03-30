var lover;
var hater;
function setup() {
  createCanvas(500, 500);
  lover = new Mover( createVector(100, 100), 20);
  hater = new Mover( createVector(200, 80), 30);
}

function draw() {
  background(200);

  addLoveForce();
  addHateForce();

  fill(70);
  lover.update();
  lover.display();

  fill(150);
  hater.update();
  hater.display();
  hater.checkBound();

}

function addLoveForce (){
  var loverLoc = lover.loc.copy();
  var haterLoc = hater.loc.copy();
  var diff = haterLoc.sub(loverLoc);
  diff.mult(0.001);
  lover.addForce(diff);
}

function addHateForce () {
  var loverLoc = lover.loc.copy();
  var haterLoc = hater.loc.copy();
  var diff = haterLoc.sub(loverLoc );
  if (diff.mag() < 40) {
    diff.mult(0.1)
    hater.addForce(diff);
  }
}

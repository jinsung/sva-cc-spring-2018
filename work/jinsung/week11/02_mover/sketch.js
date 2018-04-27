var mover;
function setup() {
  createCanvas(500, 500);
  mover = new Mover();
}

function draw() {
  var gravity = createVector( 0, 0.2 );
  var wind = createVector( 0.01, 0 );
  mover.applyForce(gravity);
  mover.applyForce(wind);
  background(200);
  mover.update();
  mover.display();
}

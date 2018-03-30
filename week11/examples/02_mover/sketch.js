var mover;
function setup() {
  createCanvas(500, 500);
  mover = new Mover();
}

function draw() {
  background(200);
  mover.update();
  mover.display();
}

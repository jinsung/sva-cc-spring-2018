
var ball1;

function setup() {
  createCanvas(400, 400);
  ball1 = new BouncingBall();
  ball1.setup(0, 10, 10, 2, 2.1);
}

function draw() {
  background(100);

  ball1.move();
  ball1.bounce(width, height);
  ball1.draw();
}

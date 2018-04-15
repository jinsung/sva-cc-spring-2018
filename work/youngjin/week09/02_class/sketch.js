var ball;
var ball2;

function setup() {
  createCanvas(500, 500);
  ball = new Ball();
  ball.setup(200, 300, 50, 2.0, 2.2);
  ball2 = new Ball();
  ball2.setup(100, 200, 40, 2.0, 2.2);
}

function draw() {
  background(200);
  ball.move();
  ball.display();
  ball.bounce();
  ball2.move();
  ball2.display();
  ball2.bounce();
}

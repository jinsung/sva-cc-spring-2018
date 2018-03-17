var ball;
var ball1;

function setup() {
  createCanvas(500, 500);
  ball = new Ball();
  ball.setup(200, 300, 50, 2.0, 2.2);

  ball1 = new Ball();
  ball1.setup(100, 100, 100, 1, 1.1);
}

function draw() {
  background(200);
  ball.move();
  ball.display();
  ball.bounce();

  ball1.move();
  ball1.display();
  ball1.bounce();
}

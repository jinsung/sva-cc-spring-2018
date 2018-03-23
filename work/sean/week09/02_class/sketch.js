var ball;
var ball2;
var ball3;
var ball4;

function setup() {
  createCanvas(400, 400);
  ball = new Ball();
  ball.setup(200, 300, 50, 2.0, 2.2);

  ball2 = new Ball();
  ball2.setup(50, 100, 20, 4.0, 4.5);

  ball3 = new Ball();
  ball3.setup(400, 10, 100, 1.5, 1.6);

  ball4 = new Ball();
  ball4.setup(20, 250, 160, 0.6, 0.8);
}

function draw() {
  background(100);
  ball.move();
  ball.display();
  ball.bounce();

  ball2.move();
  ball2.display();
  ball2.bounce();

  ball3.move();
  ball3.display();
  ball3.bounce();

  ball4.move();
  ball4.display();
  ball4.bounce();
}

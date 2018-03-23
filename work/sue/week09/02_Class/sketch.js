var ball;
var ball2;

function setup() {
  createCanvas(500, 500);
  ball = new Ball();
    ball.setup (200, 300, 50, 2.0, 2.2);
  ball2 = new Ball();
    ball2.setup (30, 20, 20, 3.0, 3.0);
  ball3 = new Ball();
    ball3.setup (300, 400,100, 2.5, 3.0)
}

function draw() {
  background(200);
  ball.move();
  ball.display();
  ball.bounce();

  ball2.move();
  ball2.display();
  ball2.bounce();

  ball3.move();
  ball3.display();
  ball3.bounce();
}

var ball;
var ball2;
var ball3;

function setup() {
  createCanvas(500, 500);

  //note the uppercase B on the 'Ball' when creating class
  ball = new Ball();
  ball.setup(400, 400, 50, 3.0, 3.2);

  ball2 = new Ball();
  ball2.setup(200, 300, 80, 2.0, 2.2);

  ball3 = new Ball();
  ball3.setup(10, 30, 40, 3.5, 3.7);
}

function draw() {
  background(0);

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

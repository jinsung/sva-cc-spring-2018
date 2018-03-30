var ball;
function setup() {
  createCanvas(500, 500);
  ball = new BouncingBall(10, 10, 20, 2.0, 2.1);
  //create a ball.
}

function draw() {
  background(200);
  // call function mov and display to draw a ball object here.
  ball.move()
  ball.display();
  ball.bounce ();
}

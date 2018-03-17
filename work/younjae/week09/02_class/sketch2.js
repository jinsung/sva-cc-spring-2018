var ball;
var ball2;

function setup() {
  createCanvas(500, 500);
  ball = new Ball();
  ball.setup (200, 300, 50, 2.0, 2.2);
//ball.setup (200, 300, size, xspeed, yspeed);
}

function draw() {
  background(200);
  ball.move();
  ball.display();
  ball.bounce();

}

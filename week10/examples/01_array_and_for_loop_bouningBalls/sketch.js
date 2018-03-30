var balls = [];
function setup() {
  createCanvas(500, 500);
  smooth();
  var numOfBalls = 200;

  for (var i=0; i<numOfBalls; i++) {
    balls[i] = new BouncingBall();
    var size = 10 + random(10);
    balls[i].setup(0, size, size, 2.0 + random(1), 2.0 + random(1));
  }
}

function draw() {
  background(200);
  for (var i=0; i<balls.length; i++) {
    balls[i].move();
    balls[i].bounce(width, height);
    balls[i].draw();
  }
}

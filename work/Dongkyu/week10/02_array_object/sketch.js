var balls = [];

function setup() {
  createCanvas(500, 500);
  // creat a ball.

  for (var i = 0; i < 200; i++) {
    var ii = i * 0.01;
    balls[i] = new BouncingBall(ii, ii, 20, ii, ii + 0.1, i);
  }
  /*for (var i = 0; i < 400; i++) {
    balls[i] = new BouncingBall(random(width), random(height), random(5, 25), random(-1, 1), random(-1, 1), random(255));
  }*/

}

function draw() {
  background(200);
  // call function move and display to draw a ball object here.

  for (var i = 0; i < 200; i++) {
  balls[i].move();
  balls[i].display();
  balls[i].bounce();
  }
}

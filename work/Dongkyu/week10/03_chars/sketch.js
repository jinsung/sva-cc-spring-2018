var balls = [];
var myString = "Dongkyu Lee";

function setup() {
  createCanvas(500, 500);
  // creat a ball.
  textFont ('Dia')
  for (var i = 0; i < myString.length; i++) {
    var ii = i * 0.01;
    var char = myString[i];
    balls[i] = new MovingChar(char, i * 10, i * 10, 20, ii + 2.0, ii + 2.1, i);
  }
  /*for (var i = 0; i < 400; i++) {
    balls[i] = new BouncingBall(random(width), random(height), random(5, 25), random(-1, 1), random(-1, 1), random(255));
  }*/

}

function draw() {
  background(200);
  // call function move and display to draw a ball object here.

  for (var i = 0; i < myString.length; i++) {
  balls[i].move();
  balls[i].display();
  balls[i].bounce();
  }
}

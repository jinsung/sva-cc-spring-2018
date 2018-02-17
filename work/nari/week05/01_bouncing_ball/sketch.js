var circleX;
var circleY;
var speedX;
var speedY;

function setup() {
  createCanvas(500, 500);
  circleX = 20;
  circleY = 20;
  speedX = 3;
  speedY = 2;
}

function bounce() {
  //check if the ball hits the boundary.
  if (circleX > width || circleX < 0) {
    speedX = speedX * -1;
  }

  if (circleY > height || circleY < 0) {
    speedY = speedY * -1;
  }
}

function move() {
  //move the circle.
  circleX = circleX + speedX;
  circleY = circleY + speedY;
}

function drawCircle(x, y, numOfCircles, circleSize, circleColor) {
  //draw the circle.
  //var circleSize = 200;

  for (var i = 0; i < numOfCircles; i = i + 1) {
    var seg = circleSize / numOfCircles;
    var inverseIndex = numOfCircles - i;

    fill(circleColor);
    ellipse (x, y, circleSize, circleSize);
    circleSize = inverseIndex * seg;
    circleColor = circleColor - 25;
  }
}

function draw() {
  background(200);

  drawCircle(width/2, height/2, 30, 200, 255);
  drawCircle(width/4, height/4, 10, 100, 255);
  drawCircle(400, 400, 13, 150, 255);
}

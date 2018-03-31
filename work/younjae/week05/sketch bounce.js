var circleX;
var circleY;
var speedX
var speedY

function setup() {
  createCanvas(500, 500);
  circleX = 0;
  circleY = 0;
  speedX = 1.5;
  speedY = 1.4;
}

function draw() {
  background(200);

//check if it hit the background
if (circleX < 0 || circleX > width) {
  speedX = speedX * -1
}

if (circleY < 0 || circleY > height) {
  speedY = speedY * -1
}

  circleX = circleX + speedX;
  circleY = circleY + speedY;

  var circleSize = 10
  ellipse(circleX, circleY, circleSize, circleSize);


}

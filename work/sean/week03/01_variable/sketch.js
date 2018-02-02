var circleY;
var circleX;
var circleXSpeed;
var circleYSpeed;
var circleXSpeedEqual;

function setup() {
  createCanvas(1500,800);
  circleY = 250;
  circleX = 250;
  circleXSpeed = 50;
  circleYSpeed = 40;
}

function draw () {
  background (200);
  ellipse (circleX, circleY, circleY, circleY);
  fill (circleX, circleY, 150);
  circleY = circleY + circleYSpeed;
  circleX = circleX + circleXSpeed;

  if (circleX < 0 || circleX > width) {
    circleXSpeed= circleXSpeed * -1;
  }

  if (circleY < 0 || circleY > height) {
    circleYSpeed = circleYSpeed * -1;
  }

  // console.log("circleX is " + circleX);
}

var circleY;
var circleX;

var circleXSpeed;
var circleYSpeed;

function setup() {
  createCanvas(500, 500);
  circleY = 250;
  circleX = 250;
  circleXSpeed = 5;
  circleYSpeed = 10 ;
}

function draw() {
  background(200);
  ellipse(circleX, circleY, 20, 20);

  circleY = circleY + circleYSpeed;
  circleX = circleX + circleXSpeed;

  if (circleY < 0 || circleY > width ) {
    circleYSpeed = circleYSpeed * -1;
  }
  if (circleX < 0 || circleX > height ) {
    circleXSpeed = circleXSpeed * -1;
  }

  // console.log("circleX is " + circleX);
}

var circleY;
var circleX;

var circleXSpeed;
var circleYSpeed;

function setup() {
  createCanvas(500, 500);
  circleY = 250;
  circleX = 250;
  circleXSpeed = 2;
  circleYSpeed = 2.5;
}
function draw() {
  background(200);
  ellipse(circleX, circleY, 20, 20);

  circleY = circleY + circleYSpeed;
  circleX = circleX + circleXSpeed;

  if (circleX < 0) {
    circleXSpeed = 2;
  }

  if (circleX > 500) {
    circleXSpeed = -2;
 }

  if (circleY < 0) {
   circleYSpeed = 2.5;
 }

  if (circleY > 500) {
   circleYSpeed = -2.5;
 }
}

var circleY;
var circleX;

var circleXSpeed;

function setup() {
  createCanvas(500, 500);
  circleY = 250;
  circleX = 250;
  circleXSpeed = 0.5;
}
function draw() {
  background(200);
  ellipse(circleX, circleY, 20, 20);

  //circleY = circleY + 1;
  circleX = circleX + circleXSpeed;

  if (circleX < 0) {
    circleXSpeed = 2;
  }

  if (circleX > 500) {
    circleXSpeed = -2;

 }
}

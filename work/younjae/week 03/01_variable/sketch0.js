var circleY;
var circleX;
function setup() {
  createCanvas(500, 500);
  circleY = 250;
  circleX = 250;
}

function draw() {
  background(200);
  ellipse(circleX, circleY, 20, 20);

  circleY = circleY + 1;
  circleX = circleX + 1;

}

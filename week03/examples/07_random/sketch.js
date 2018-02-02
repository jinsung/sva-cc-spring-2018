// Example 4-7: Filling variables with random values

var circleX;
var circleY;

function setup() {
  createCanvas(640, 480);
  background(0);
}

function draw() {
  // Each time through draw(), new random
  // numbers are picked for a new ellipse.
  circleX = random(width);
  circleY = random(height);
  ellipse(circleX, circleY, 10, 10);
}

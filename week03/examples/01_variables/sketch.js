var circleX;

function setup() {
  createCanvas(500, 500);
  circleX = 250;
}

function draw() {
  background(200);

  fill(100);
  ellipse(circleX, 250, 20, 20);
}

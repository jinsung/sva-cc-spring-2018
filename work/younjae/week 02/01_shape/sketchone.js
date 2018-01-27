function setup() {
  createCanvas(500, 500);
  background(200);

  fill(255, 0, 0);
  ellipseMode(CORNER);
  ellipse(250, 250, 100, 100);

  fill(0, 255, 0);
  rectMode(CENTER);
  rect(250, 250, 100, 100);
}

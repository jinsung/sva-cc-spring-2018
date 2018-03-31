var circleX;
var colorRed = 240;

function setup() {
  createCanvas(500, 500);
  circleX = random(255,255,0);
}

function draw() {
  background(200);
  ellipse(mouseX, mouseY, 100, 100);
  ellipseMode(CENTER);

  fill (colorRed, 255, 100);
  ellipse(mouseX, mouseY, 100, 100);

  fill (colorRed-20, 255, 100);
  ellipse(mouseX, mouseY, 80, 80);

  fill (colorRed-40, 255, 100);
  ellipse(mouseX, mouseY, 60, 60);

  fill (colorRed-60, 255, 100);
  ellipse(mouseX, mouseY, 40, 40);

  fill (colorRed-80, 255, 100);
  ellipse(mouseX, mouseY, 20, 20);;
  noStroke()

  if (mouseIsPressed) {
    colorRed = colorRed - 5;
  }

  if (keyIsPressed) {
    colorRed = colorRed + 5;
  }
}

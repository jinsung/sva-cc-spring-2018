var xPosition;
var yPosition;
var colorIncrease = 10;
var myRandomNumX;
var myRandomNumY;
var myRandomNumR;

function setup() {
  createCanvas(500, 500);
  noStroke();
  xPosition = width / 2;
  yPosition = height / 2;
}

function draw() {
  background(180);
  fill(mouseX /2);
  ellipse(150, 150, mouseX, mouseY);

    // Each time through draw(), new random
    // numbers are picked for a new ellipse.
    circleX = random(width);
    circleY = random(height);
    ellipse(circleX, circleY, 20, 10);
  //frameCount
  fill (frameCount + colorIncrease, 0, 0);
  ellipse(xPosition, yPosition, 10, 10);

  fill (frameCount + colorIncrease * 2, 0, 0);
  ellipse(xPosition, yPosition, 80, 80);

  fill (frameCount + colorIncrease * 3, 0, 0);
  ellipse(xPosition, yPosition, 60, 60);

  fill (frameCount + colorIncrease * 4, 0, 0);
  ellipse(xPosition, yPosition, 40, 40);

  fill (frameCount + colorIncrease * 5, 0, 0);
  ellipse(xPosition, yPosition, 20, 20);

    xPosition = xPosition + 1;
}

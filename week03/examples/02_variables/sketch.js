var xPosition = 320;
var yPosition = 240;

function setup() {
  createCanvas(640, 480);
  noStroke();
}

function draw() {
  background(100);
  ellipseMode(CENTER);
  var firstColor = 100;
  var colorChange = 30;

  fill (colorChange, 0, 0);
  ellipse(xPosition, yPosition, 100, 100);

  colorChange += 30;
  fill (colorChange, 0, 0);
  ellipse(xPosition, yPosition, 80, 80);

  colorChange += 30;
  fill (colorChange, 0, 0);
  ellipse(xPosition, yPosition, 60, 60);

  colorChange += 30;
  fill (colorChange, 0, 0);
  ellipse(xPosition, yPosition, 40, 40);

  colorChange += 30;
  fill (colorChange, 0, 0);
  ellipse(xPosition, yPosition, 20, 20);

}

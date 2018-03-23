var sourceText = "Be happy for this moment";
var circleX;
var circleY;

function setup() {
  createCanvas(800, 400);
  background(110, 0, 100);
  frameRate(10);
}
function draw() {
  background(50);
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  var middle = sourceText.length / 2;
  var left = middle - ((mouseX / width) * middle);
  var right = middle + ((mouseX / width) * middle);
  text(
    sourceText.substring(left, right+1),
    width/2, height/2);
}

function draw() {
  circleX = random(width);
  circleY = random(height);
  ellipse(circleX, circleY, 50, 50);
  noStroke(0);
}

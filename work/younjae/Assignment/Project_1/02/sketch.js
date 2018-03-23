var sourceText = "Be happy for this moment";
var circleX;
var circleY;

function setup() {
  createCanvas(900, 600);
  background(10, 0, 100);
  frameRate(20);
}
function draw() {
  background(30, 90, 150);
  fill(255, 255, 0);
  circleX = random(width);
  circleY = random(height);
  ellipse(circleX, circleY, 20, 20);
  noStroke(0);

  textSize(40);
  textAlign(CENTER, CENTER);
  var middle = sourceText.length / 2;
  var left = middle - ((mouseX / width) * middle);
  var right = middle + ((mouseX / width) * middle);
  text(
    sourceText.substring(left, right+1),
    width/2, height/2);
}

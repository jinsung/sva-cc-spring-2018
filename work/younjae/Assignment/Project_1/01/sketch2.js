var sourceText = "Be happy for this moment";
function setup() {
  createCanvas(800, 400);
  frameRate(20);
}

function draw() {
  noStroke();
  fill(mouseX / 2);
  ellipse(400, 250, mouseX, mouseY);

}
function draw() {
  background(0);
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

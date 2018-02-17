var myRandomNumX;
var myRandomNumY;


function setup() {
  createCanvas(1427,785);
  background(200);
}

function draw () {
  myRandomNumX = random(width);
  myRandomNumY = random(height);

  ellipse(myRandomNumX, myRandomNumY, mouseX, mouseX);
  fill(myRandomNumX, myRandomNumY, 150);
  noStroke();
}

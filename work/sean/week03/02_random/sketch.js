var myRandomNumX;
var myRandomNumY;


function setup() {
  createCanvas(500,500);
  background(200);
}

function draw () {
  myRandomNumX = random(width);
  myRandomNumY = random(height);

  ellipse(myRandomNumX, myRandomNumY, mouseX, mouseX);
  fill(myRandomNumX, myRandomNumY, 150);
  noStroke();
}

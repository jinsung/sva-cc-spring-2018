var myRandomNumX;
var myRandomNumY;

var myRandomNumR;
function setup () {
  createCanvas(500, 500);
  background(200);
}

function draw() {
  myRandomNumX = random(width);
  myRandomNumY = random(height);
  myRandomNumR = random(255);
  fill (myRandomNumR, 0, 0);
  ellipse(myRandomNumX, height/2, 20. 20);
}

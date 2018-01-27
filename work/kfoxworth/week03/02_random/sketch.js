var myRandomNumX;
var myRandomNumY;

var myRandomNumR;
function setup() {
  createCanvas(500, 500);
  background(200);

}

function draw() {
  myRandomNumX = random(width);
  myRandomNumY = random(height);
  myRandomNumR = random(255);
  noStroke();
  fill(myRandomNumR, 0, 0, 100);
  ellipse(myRandomNumX, myRandomNumY, 20, 20);
}

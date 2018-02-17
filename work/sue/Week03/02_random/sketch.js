var myRandomNumX;
var myRandomNumY;

var myRandomNumR;
var myRandomNumG;
var myRandomNumB;

function setup() {
  background(200);
  //if background is under setup, many ellipses
  createCanvas(500, 500);
}

function draw() {
  myRandomNumX = random(width);
  myRandomNumY = random(height);
  myRandomNumR = random(200);
  myRandomNumG = random(255);
  myRandomNumB = random(225);

  noStroke();
  stroke(255, 0, 100)
  fill(myRandomNumR, myRandomNumG, myRandomNumB, 100);
  //(R, G, B, opacity)
  //255 is the highest value
  ellipse(myRandomNumX, myRandomNumY, 50, 50);

}

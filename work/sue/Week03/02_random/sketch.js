var myRandomNumX;
var myRandomNumY;

var myRandomNumR;
var myRandomNumG;
var myRandomNumB;

function setup() {
  background(200);
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
  //the 4th number is opacity
  ellipse(myRandomNumX, myRandomNumY, 50, 50);

}

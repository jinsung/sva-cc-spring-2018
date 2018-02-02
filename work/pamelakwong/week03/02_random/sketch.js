var myRandomNumX;
var myRandomNumY;
var myRandomR;

function setup() {
  createCanvas(500,500);
  background(200);
}

function draw() {
  myRandomNumX = random(width);
  myRandomNumY = random(height);
  myRandomR = random(255);
  noStroke();
//stroke(255, 0, 0, 255100);
  // fourth parameter is alpha
  fill(myRandomR, 0 , 0, 100);
  ellipse(myRandomNumX, myRandomNumY, 20, 20);



}

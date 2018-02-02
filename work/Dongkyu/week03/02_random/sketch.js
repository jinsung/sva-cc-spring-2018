var myRandomNumX;
var myRandomNumY;
var myRandomNumR;
function setup () {
  createCanvas(500, 500);
  background(200);
}

function draw () {
  /*background(200);*/
  myRandomNumX = random(width);
  myRandomNumY = random(height);
  myRandomNumR = random(255);

  /*ellipse(myRandomNumX, height/2, 20, 20);*/
  noStroke();
  fill(myRandomNumR, 0, 0, 150); /*last one is opacity to 255*/
  ellipse(myRandomNumX, myRandomNumY, 20, 20);
}

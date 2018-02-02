var myRandomNum
var myRandonNumY
var myRandomNumR
function setup(){
  createCanvas(500, 500);
  background(200);
}

function draw() {
  myRandomNum = random(width);
  myRandonNumY = random(height);
  myRandomNumR = random(255);
  fill(myRandomNumR, 0, 0, 100)
  ellipse(myRandomNum, myRandonNumY, 20, 20);
}

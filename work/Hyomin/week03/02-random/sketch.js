var myRandomNumX;
var myRandomNumY;
var myRandomNumR;
function setup(){
  createCanvas(500,500)
  background(200);
}

function draw() {
  myRandomNumX=random(width);
  myRandomNumY=random(height);
  myRandomNumR=random(255);

  fill(myRandomNumR,myRandomNumX,0);
  ellipse(myRandomNumX,myRandomNumY,20,20);
}
//

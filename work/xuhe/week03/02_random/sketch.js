var myRandomNumX;
var myRandomNumY;
var myRandomNumR;

function setup(){
  createCanvas(500,500);
  background(250);

}

function draw(){

  myRandomNumX = random(width);
  myRandomNumY = random(height);
  myRandomNumR = random (255);
  noStroke();
  stroke(0,0,0,0);
  fill(myRandomNumR,0,0);
  ellipse(myRandomNumX,myRandomNumY,20,20);


}

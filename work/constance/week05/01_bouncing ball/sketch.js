var circleX;
var circleY;
var speedX;
var speedY;

function setup(){
  createCanvas(500,500);
  circleX=0;
  circleY=0;
  speedX=1.5;
  speedY=1.4;

}

function drawCircle(x,y,numOfCircles,circleSize){

  for(var i=0;i<numOfCircles;i=i+1){
    var seg=circleSize/numOfCircles;
    var iseg=i/numOfCircles;
    var inverseIndex=numOfCircles-i+1;

fill(iseg*255);
    ellipse(x,y,circleSize,circleSize);
    circleSize=inverseIndex*seg
  }
}

function draw(){
  background(200,70,200);

  drawCircle(width/2,height/2,13,200);
  drawCircle(100,height/2,4,30);
  drawCircle(width/4,height/4,7,120);
}

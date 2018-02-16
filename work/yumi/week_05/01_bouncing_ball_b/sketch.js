var circleX;
var circleY;
var speedX;
var speedY;

function setup() {
  createCanvas(300, 300);
  circleX = 0;
  circleY = 0;
  speedX = 1.5;
  speedY = 1.4;
}

function draw() {
  background(200);
  bounce();
  move();
  drawCircle(30, 200, 5);
}

function bounce(){
    if(circleX < 0 || circleX > width){
      speedX = speedX *-1;
    }
    if(circleY < 0 || circleY > height){
      speedY = speedY *- 1
    }
}

function move(){
  circleX = circleX + speedX;
  circleY = circleY + speedY;
}

function drawCircle(numOfCircle, circleSize, gap){
  //var circleSize = 100;
  for(i = 0; i < numOfCircle; i = i + 1){
    ellipse(circleX, circleY, circleSize, circleSize)
    circleSize = circleSize - gap;
  }
}

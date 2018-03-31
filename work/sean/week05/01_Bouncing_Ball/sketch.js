var circleX = 10;
var circleY = 10;

var circleXSpeed = 3;
var circleYSpeed = 5;

var circleSize = 30;

function setup() {
  createCanvas(500,500);
}

function bounce(){
  //Bounce the circle
  if (circleX < 0 || circleX > width){
    circleXSpeed = circleXSpeed * -1;
  }

  if (circleY < 0 || circleY > height){
    circleYSpeed = circleYSpeed * -1;
  }
}

function move() {
  //Move the circle
  circleX = circleX + circleXSpeed;
  circleY = circleY + circleYSpeed;
}


function drawCircle(numOfCircles, circleSize) {
  //Circle Info


  for ( var i = 0; i < numOfCircles; i = i + 1) {
    ellipse(circleX, circleY, circleSize, circleSize);
    circleSize = circleSize - 10;
  }

  fill (255);
}


function draw () {
  background(200);
  bounce();
  move();
  drawCircle(30, 300);
}

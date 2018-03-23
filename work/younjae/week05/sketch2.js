var circleX;
var circleY;
var speedX
var speedY

function setup() {
  createCanvas(500, 500);
  circleX = 0;
  circleY = 0;
  speedX = 1.5;
  speedY = 1.4;
}

function bounce() {
  if (circleX < 0 || circleX > width) {
    speedX = speedX * -1
  }

  if (circleY < 0 || circleY > height) {
    speedY = speedY * -1
  }
}

function move() {

circleX = circleX + speedX
circleY = circleY + speedY
}

function drawCircle( numOfCircles, circleSize ){

  for( var i = 0; i < numOfCircles; i = i + 1) {
    ellipse( circleX, circleY, circleSize, circleSize);
    circleSize = circleSize - 1;

  }

}

function draw() {
  background(100, 0, 200, 50);
  bounce();
  move();
  move();
  drawCircle (10, 300);

}

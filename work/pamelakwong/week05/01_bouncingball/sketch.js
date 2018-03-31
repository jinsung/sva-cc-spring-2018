var circleX;
var circleY;
var speedX;
var speedY;

function setup() {
  createCanvas(500, 500);
  circleX = 60;
  circleY = 80;
  speedX = 1.5;
  speedY = 1.5;

}

function bounce(x) {
  // check if it hit the bound.
  if (circleX < 0 || circleX > width){
    speedX = speedX * -1;
  }

  if (circleY < 0 || circleY > height){
    speedY = speedY * -1;
  }
}

function move() {
  // move the circle
  circleX = circleX + speedX;
  circleY = circleX + speedY;
}

function drawCircle(x, y, numOfCircles, circleSize) {
  // drawing a circle
  for (var i = 0; i < numOfCircles; i++) {
    var iseg = i / (numOfCircles - 1);

    circleSize = circleSize * (1 - iseg);
    fill (iseg * 255);
    ellipse(x, y, circleSize, circleSize);

  }

}

function draw() {
   background(200);
   drawCircle(width/2, height/2, 9, 200);
   drawCircle(400, 400, 10, 100);
   drawCircle(120, 300, 10, 100);

}

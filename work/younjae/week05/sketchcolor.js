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

function drawCircle( x, y, numOfCircles, circleSize ){

  for( var i = 0; i < numOfCircles; i = i + 1) {
    var iseg = i / (numOfCircles - 1);
    var seg = circleSize / numOfCircles;
    var inverseIndex = numOfCircles - i - 1;
    circleSize = circleSize * ( 1 - iseg );
    fill( iseg * 255)
    //fill(circleSize, circleSize, 100);
    ellipse( x, y, circleSize, circleSize);
    circleSize = circleSize - 10;

  }

}

function draw() {
  background(100, 0, 200, 50);

  drawCircle ( width/2, height/2, 7, 200);
  drawCircle ( 100, 100, 13, 100);
  drawCircle ( 400, 300, 3, 50);
}

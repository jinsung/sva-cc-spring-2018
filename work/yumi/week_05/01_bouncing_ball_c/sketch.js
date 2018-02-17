var circleX;
var circleY;
var speedX;
var speedY;

function setup() {
  createCanvas(500, 500);
  circleX = 0;
  circleY = 0;
  speedX = 1.5;
  speedY = 1.4;
}

function draw() {
  background(200);
  drawCircle(width/2, height/2, 20, 200, 1);
  drawCircle(100, 100, 10, 150, 2);
  drawCircle(400, 400, 10, 100, 3);
}

function drawCircle(x, y, numOfCircle, circleSize, alpha){
  //var circleSize = 100;
  for(i = 0; i < numOfCircle; i = i + 1){
    var seg = circleSize / numOfCircle;
    var inverseIndex = numOfCircle - i + 1;
    noStroke();
    fill(255 - i*numOfCircle*alpha)
    ellipse(x, y, circleSize, circleSize)
    circleSize = inverseIndex * seg;
  }
}

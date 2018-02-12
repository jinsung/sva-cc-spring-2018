var backgroundColor = 255;
var target1X = 300;
var target1Y = 300;
var circleX
var circleX2
var circleX3

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  circleX = 100;
  circleX2 = 0
  circleX3 = 250
  circleX4 = 850
  circleX5 = 200
  circleX6 = 1400
  circleX7 = 1200
}

function draw() {
  backgroundColor = getDistance(target1X, target1Y, mouseX, mouseY);
  background(backgroundColor);

  drawTarget(target1X, target1Y, 50, 400);

  drawTarget(mouseX, mouseY, 30, 50);

}

function draw() {
  fill(40, 30, 100);
  ellipse(circleX, 250, 20, 20);
  circleX = circleX + 0.6;

  fill(255);
  ellipse(circleX2, 150, 35, 35);
  circleX2 = circleX2 + 0.3;

  stroke(90, 25, 240);
  fill(80, 100, 255);
  ellipse(circleX3, 750, 50, 50);
  circleX3 = circleX3 + 0.2;

  fill(80, 30, 200)
  ellipse(circleX4, 500, 90, 90);
  circleX4 = circleX4 - 0.3;

  fill(100, 200, 255);
  ellipse(circleX5, 600, 10, 10);

  fill(10, 10, 80);
  ellipse(circleX6, 900, 800, 800);
  circleX6 = circleX6 - 0.05;

  fill(100, 200, 255);
  ellipse(circleX7, 100, 100, 100);
  circleX7 = circleX7 - 0.1;
}

function drawTarget(x, y, numOfCircles, targetSize, targetHue) {
  for (var i=numOfCircles; i>0; i--) {
    var step = i/numOfCircles; // range from 1 to 0.
    fill(step*255);
    var size = targetSize * step;
    ellipse(x, y, size, size );
  }
}

function getDistance(x1, y1, x2, y2) {
  var dx = x1 - x2;
  var dy = y1 - y2;
  var result = Math.sqrt(dx*dx + dy*dy);
  return result;
}

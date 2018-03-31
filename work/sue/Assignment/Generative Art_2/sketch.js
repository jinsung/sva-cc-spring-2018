var backgroundColor = 255;
var target1X = 300;
var target1Y = 300;

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
  fill(255, 30, 180);
  ellipse(circleX, 250, 20, 20);
  circleX = circleX + 0.6;

  fill(25, 255, 160);
  ellipse(circleX2, 150, 35, 35);
  circleX2 = circleX2 + 0.3;

  stroke(90, 25, 200);
  fill(80, 100, 255);
  ellipse(circleX3, 750, 50, 50);
  circleX3 = circleX3 + 0.2;

  fill(20, 220, 255)
  ellipse(circleX4, 500, 90, 90);
  circleX4 = circleX4 - 0.3;

  fill(90, 25, 200);
  ellipse(circleX5, 600, 10, 10);

  fill(255, 10, 80);
  ellipse(circleX6, 900, 800, 800);
  circleX6 = circleX6 - 0.08;

  fill(250, 255, 20);
  ellipse(circleX7, 100, 100, 100);
  circleX7 = circleX7 - 0.2;
}

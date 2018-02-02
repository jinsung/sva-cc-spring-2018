//random numbers

var circleX;
var circleY;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
    background(0);
}

function draw() {
  noStroke();
  fill(random(0, 255), random(0, 255), random(0, 255), 100);
  circleX = random(width);
  circleY = random(height);
  ellipse(circleX, circleY, 1, random(100, 500));
}

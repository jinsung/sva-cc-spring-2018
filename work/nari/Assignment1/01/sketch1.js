var rectSize;
var rectX;
var rectY;
var rectColor;

function setup() {
  createCanvas(500, 500);
  background(0);
  rectMode(CENTER);
  frameRate(12);

  rectSize = width;
  rectX = width/2;
  rectY = height/2;
  rectColor = 255;
}


function draw() {
  fill(rectColor, 20);
  noStroke();
  rect(rectX, rectY, rectSize, rectSize);

  rectSize = rectSize - 30;

  if (rectSize < 0) {
    rectSize = width;
    rectColor = 0;
    background(255);
  }

  if (mouseIsPressed) {
    stroke(100, 100, 240);
    noFill();
    rect(rectX, rectY, pmouseX, pmouseX);

    rectSize = rectSize - 20;
  }
}

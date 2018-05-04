var angle = 0;

function setup() {
  createCanvas(500, 500);
  background(200);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {

  var color = 255;

  var circleSize = 10;
  var circleSpace = 10;
  for (var circleY = 0; circleY <= height; circleY += circleSpace) {
    for(var circleX = 0; circleX <= width; circleX += circleSpace) {
      noStroke();
      ellipse(circleX, circleY, circleSize, circleSize);
    }
  }


  rotate(angle);
  rect(400, 200, 100, 100);
  rect(400, 40, 100, 100);

  rect(100, 200, 100, 100);
  rect(100, 40, 100, 100);

  angle = angle + 1;





}

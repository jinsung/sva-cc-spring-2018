function setup() {
  createCanvas(500,500);
}

function draw() {
  background (255);
  var circleSize = 10;
  var circleSpace = 10;
  for (var circleY = 0; circleY <= height; circleY += circleSpace) {
    for(var circleX = 0; circleX <= width; circleX += circleSpace) {
      ellipse(circleX, circleY, circleSize, circleSize);
    }
  }

  for (circleY = circleSpace; circleY <= height; circleY += circleSpace) {
    for (circleX = circleSpace; circleX <= width; circleX += circleSpace)

  }

}


function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(200);
  var circleSize = 10;
  var circleSpace = 15;
  for (var circleY = 0; circleY <= height; circleY = circleY + circleSpace) {
    for(var circleX = 0; circleX <= width; circleX = circleX + circleSpace) {
      ellipse(circleX, circleY, circleSize, circleSize);
    }
  }


}

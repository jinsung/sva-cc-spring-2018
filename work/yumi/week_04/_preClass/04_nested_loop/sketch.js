
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(0);

  var circleSize = 10;
  var circleSpace = 100;
  for(var circleY = 0; circleY <= height; circleY = circleY + circleSpace){
    for(var circleX = 0; circleX <= width; circleX = circleX + circleSpace){
      fill(255);
      ellipse(circleX, circleY, circleSize, circleSize)

    }
  }
}

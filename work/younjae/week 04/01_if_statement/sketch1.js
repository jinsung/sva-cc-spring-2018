var circleX = 0;
function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(200);
  if (circleX < mouseX) {
    circleX = circleX + 1;
  } else if ( circleX >= mouseX ){
    circleX = circleX - 1;
  }

  ellipse(circleX, height/2, 10, 10);

}

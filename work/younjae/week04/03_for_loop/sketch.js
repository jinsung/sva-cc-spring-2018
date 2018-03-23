var circleX = 0;
function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(200);

  fill( 255 )
  circleX = 0
 for (circleX = 0; circleX < width; circleX = circleX + 10) {


  ellipse(circleX, height/2, 10, 10);
  // (x, y, size, size)
 }

}

var circleX = 0;
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(200);

  fill( 255 );
  circleX = 0;

  while ( circleX < mouseX ) {
    circleX = circleX + 20;
    ellipse(circleX, height/2, 10, 10);
  }


}

var circleX;

function setup() {
  createCanvas(500, 500);
  circleX = 0;
}

function draw() {
  background(200);

  fill( 255 );


  for ( circleX = 0; circleX < width; circleX = circleX + 10 ) {

    ellipse(circleX, height/2, 10, 10);
  }


}

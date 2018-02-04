
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(200);

  fill( 255 );
  var space = 20;
  var circleSize = 10;

  var counter = 0;
  for ( var circleX = 0; circleX < width; circleX = circleX + space ) {
    for ( var circleY = 0; circleY < height; circleY = circleY + space ) {
      ellipse(circleX, circleY, circleSize, circleSize);
      counter = counter + 1;

    }
  }
  //console.log(counter);

}

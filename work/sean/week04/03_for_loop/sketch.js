function setup() {
  createCanvas(500,500);
}

function draw () {
  background(200);

  fill (255);

  for ( var circleX = 0; circleX < width; circleX = circleX + 10 ){
    ellipse (circleX, height/2, 10, 10);
  }

}

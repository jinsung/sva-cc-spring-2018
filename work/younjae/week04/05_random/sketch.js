var time = 0;
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(200);

  fill( 255 )
  var space = 20;
  var circleSize = 10;
  time = time + 0.02
  for (circleX = 0; circleX < width; circleX = circleX + space) {
    for (circleY = 0; circleY < height; circleY = circleY + space) {
      //circleSize = random(5, 10);
      var noiseVal = noise( circleX * 0.009, circleY * 0.06451, time )
      circleSize = (noiseVal * 13.0);
      fill(circleSize * 10)
      ellipse(circleX, circleY, circleSize, circleSize);


   }
  }


 }

var time = 0;
function setup () {
  createCanvas(500, 500);

}

function draw() {
  background(0, 255, 0);

  noStroke()
  fill(255, 255, 0);
  var space = 10
  var circleSize = 10
  time = time + 0.02;
  for ( var circleX = 0; circleX < width; circleX = circleX + space) {
    for ( var circleY = 0; circleY < height; circleY = circleY + space) {
      //circleSize = random(50, 30)
      //circleSize = ( Math.sin(circleX * 0.3) + Math.cos(circleY * 0.2)) * 4 + 3;
      var noiseVal = noise( circleX * 0.009, circleY * 0.00451, time);
      circleSize = noiseVal * 13.0;
      fill(circleSize * 10);
      ellipse(circleX, circleY, circleSize, circleSize);
    }
  }

}



/*
          pi = 0
        pi/2 = 1
Math.sin (0) = 0
         2pi = 0

*/



/*
noise (___,___)
random (___,___);
*/

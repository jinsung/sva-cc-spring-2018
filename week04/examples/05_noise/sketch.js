var time = 0;

function setup() {
  createCanvas(800, 500);
  colorMode(HSB, 360, 255, 255);
}

function draw() {
  background(0);
  var circleSize = 10;
  var circleSpace = 15;
  time = time + 0.007;
  noStroke();
  for (var circleY = 0; circleY <= height; circleY = circleY + circleSpace) {
    for(var circleX = 0; circleX <= width; circleX = circleX + circleSpace) {
      //circleSize = random(1, 10);
      //circleSize = (Math.cos(circleX * 0.1) + Math.sin(circleY * 0.1) + 3) * 2;
      //circleSize = (Math.sin(circleY * circleX) + 1.0) * 3.0;
      var noiseVal = noise( circleX * 0.009, circleY * 0.00451, time );
      circleSize = noiseVal * 13.0;
      fill(noiseVal * 1.2 * 360, 255, 255);
      ellipse(circleX, circleY, circleSize, circleSize);
    }
  }


}

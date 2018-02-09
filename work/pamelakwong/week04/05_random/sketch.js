var time = 0;
function setup() {
  createCanvas(500,500);

}

function draw() {
  background(200);
  fill(255);
  var space = 20;
  var circleSize = 10;
  time = time + 0.02;

  for (var circleX = 0; circleX < width; circleX = circleX + space) {
    for (var circleY = 0; circleY < height; circleY = circleY + space) {
      //circleSize = (Math.sin(circleX * 0.40) + Math.cos(circleY * 0.09)) * 3 +2;
      var noiseVal = noise(circleX * 0.009, circleY * 0.00451, time);
      circleSize = noiseVal * 13.0;
      fill(circleSize * 10);
      ellipse(circleX, circleY, circleSize, circleSize);

      // noise
    }
  }
}

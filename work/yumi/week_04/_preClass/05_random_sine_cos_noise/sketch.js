var time = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  colorMode(HSB, 360, 255, 255);
}

function draw() {
  background(0);

  var circleSize = 10;
  var circleSpace = 30;
  time = time + 0.03;
  noStroke();

  for(circleY = 0; circleY <= height; circleY = circleY + circleSpace){
    for(circleX = 0; circleX <= width; circleX = circleX + circleSpace){
      var noiseVal = noise(circleX * 0.009, circleY * 0.00451, time);
      fill(noiseVal * 1.2 * 360, 255, 255);
      ellipse(circleX, circleY, circleSize, circleSize)
    }
  }
}

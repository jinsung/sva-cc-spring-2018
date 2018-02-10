var time = 0;
function setup () {
  createCanvas(1920, 1080);

}

function draw() {
  background(150, 100, 200);



  noStroke()
  var space = 50
  var circleSize = 50
  space = (mouseX * 0.05) + 10;

  time = time + 2;
  for ( var circleX = 0; circleX < width; circleX = circleX + space) {
    for ( var circleY = 0; circleY < height; circleY = circleY + space) {



      var noiseVal = noise( circleX * 0.5, circleY * 3, time);
      circleSize = noiseVal * 20.0;
      fill(circleSize * 20);
      ellipse(circleX, circleY, circleSize, circleSize);
    }

  }


}

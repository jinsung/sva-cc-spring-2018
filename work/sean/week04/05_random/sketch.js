var time = 0;
function setup() {
  createCanvas(500,500);
}

function draw () {
  background(200);

  fill (255);
  var space = 20;
  var circleSize = 10;
  time = time + 0.02;

  for ( var circleX = 0; circleX < width; circleX = circleX + space ){
    for ( var circleY = 0; circleY < height; circleY = circleY + space ){
      //circleSize = random(5, 10);
      //circleSize = (Math.sin(circleX * 0.26) + Math.cos(circleY * 0.5)) * 4 + 3;
      var noiseVal = noise( circleX * 0.009, circleY * 0.00451, time );
      circleSize = noiseVal * 13.0;

      fill (mouseX, mouseY, 150);
      ellipse(circleX, circleY, circleSize, circleSize);

    }
  }

  /*
  for ( var circleX = 0; circleX < width; circleX = circleX + space ){
    ellipse (circleX, 0, 10, 10);
  }

  for ( var circleY = 0; circleY < height; circleY = circleY + space ){
    ellipse (0, circleY, 10, 10);
  }
  */
}

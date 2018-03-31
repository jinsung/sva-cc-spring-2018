var xpos = 0
var ypos = 0

function setup() {
  createCanvas(500,500);
}

function draw () {
  background(200);

  fill (255);
  var space = 20;


  for ( var circleX = 0; circleX < width; circleX = circleX + space ){
    for ( var circleY = 0; circleY < height; circleY = circleY + space ){
      ellipse (circleX + sin(frameCount/5)*50, circleY + sin(frameCount/5)*40, 5, 5);
    }
  }

  xpos += 0.05;
  ypos += 0.04;
}

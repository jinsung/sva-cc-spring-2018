//var circleX;global valuable

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw(){
  background(0);
  fill(255);
  var space = 20;
  var circleSize = 5;

  for(var circleX = 0; circleX < width; circleX = circleX + space){
    for(var circleY = 0; circleY < height; circleY = circleY + space){
    ellipse(circleX, circleY, circleSize);
    }
  }
}

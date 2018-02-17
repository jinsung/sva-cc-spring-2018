//var circleX;global valuable
var time = 0;

function setup(){
  createCanvas(500, 500);
}

function draw(){
  background(0);
  fill(255);
  var space = 20;
  var circleSize = 5;
  time = time * 0.02;

  for(var circleX = 0; circleX < width; circleX = circleX + space){
    for(var circleY = 0; circleY < height; circleY = circleY + space){
      //circleSize =  random(1, 5);
      //circleSize = (Math.sin(circleX * 0.1) + Math.cos(circleY * 0.1)) * 3 + 2;
      var noiseVal = noise(circleX * 0.009, circleY * 0.00451, time);
      circleSize = noiseVal * 13.0;
      fill(circleSize * 10);
      ellipse(circleX, circleY, circleSize);
    }
  }
}


//Math.sin(radius value) = 0;
//1/2PI = 1
//2PI = 0;

//var circleX;global valuable

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw(){
  background(0);
  fill(255, 100);

  for(var circleX = 0; circleX < width; circleX = circleX + 60){
      ellipse(circleX, height/2, 30, 30);
  }
}

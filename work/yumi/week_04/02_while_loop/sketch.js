var circleX;
function setup(){
  createCanvas(window.innerWidth, window.innerHeight);

}

function draw(){
  background(0);
  fill(255, 100);
  circleX = 0; // initialize

  while(circleX < width){ //compare
    circleX = circleX + 60;//change value
    ellipse(circleX, height/2, 30, 30);
  }
}

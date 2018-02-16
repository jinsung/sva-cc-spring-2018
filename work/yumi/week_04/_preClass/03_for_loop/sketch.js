//while loop

var circleX;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(0);

  for(circleX = 0; circleX <= width; circleX = circleX + 50){
    //declar, initialize, use
    ellipse(circleX, height/2, 50, 50);
    fill(255);
    noStroke();
  }
}

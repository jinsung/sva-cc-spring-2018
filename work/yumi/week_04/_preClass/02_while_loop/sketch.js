//while loop

var circleX;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(0);

  fill(255, 35);
  stroke(0, 25);
  circleX = 0; //initialize
  while(circleX <= width){ //boolean expression
    ellipse(circleX, height/2, 100, 100);
    circleX = circleX + 10; //incremental operation
  }
}

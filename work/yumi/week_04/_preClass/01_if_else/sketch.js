//if/else

var circleX;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  circleX = width/2;
  //initialize
}

function draw() {
  background(0);

  noStroke();
  fill(255, 255, 255);
  var rightEdge = circleX + 10;
  var leftEdge = circleX - 10;

  if(mouseX == circleX){
    fill(0, 0, 255);
  } else if ( rightEdge < mouseX){
    circleX = circleX - 1;
  } else if(leftEdge < mouseX && rightEdge > mouseX){
    fill(255, 0, 0);
  } else{
    circleX = circleX + 1;
  }

  ellipse(circleX, height/2, 50, 50);
  //use

}

//variable

var circleX;
//declare

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  circleX = 0.5;
  //initialize
}

function draw() {
  background(0);
  noStroke();
  fill(255);
  ellipse(width*circleX, height*circleX, 20, 20)
  //use

}

var circleY;
var circleX;

var circleXSpeed;
var circleYSpeed;

function setup() {
  createCanvas(500, 500);
  circleY = 250;
  circleX = 250;
  circleXSpeed = 5;
  circleYSpeed = 10;

}

function draw() {
  background(100);

  noStroke();
  fill(mouseX, 225, 140);
  ellipse(circleX, circleY, 20, 20);


  circleX = circleX + circleXSpeed;
  circleY = circleY + circleYSpeed;

  if (circleX < 0 || circleX > width ) {
    circleXSpeed = circleXSpeed * -1;

  }

  //width = size of the background which is 500


  if (circleY < 0 || circleY > height ) {
    circleYSpeed = circleYSpeed * -1;

  }
  //console.log("circleX is " + circleX);

  /*
  whatever under the stars will become a comment
  */
}

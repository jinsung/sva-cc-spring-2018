var circleX;
var circleY;

var circleXSpeed;
var circleYSpeed;

function setup() {
  createCanvas(500,800);
  circleX = 250;
  circleY = 250;
  circleXSpeed = 5;
  circleYSpeed = 8;
}

function draw() {
  /*
  //This defines the background color,
  creates the ellipse,
  and relocates the ellipse.
  */

  background(200);
  ellipse(circleX, circleY, 20, 20);

  circleX = circleX + circleXSpeed;
  circleY = circleY + circleYSpeed;



  //if loops to make the circle stay in the canvas
  if (circleX < 0 || circleX > width) {
    circleXSpeed = circleXSpeed * -1;
  }

  if (circleY < 0 || circleY > height) {
    circleYSpeed = circleYSpeed * -1;
  }


  //This is to debug.
  //console.log("circleY is " + circleY);

}

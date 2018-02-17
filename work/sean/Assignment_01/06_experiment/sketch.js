var circleX = 0;
var circleY = 0;

function setup() {
  createCanvas(500,500);
}

function draw () {
  background(200);
  fill (255,255,255);

  /*
  if both
  "circleX-5 is less than MouseX" and
  "circleX+5 is greater than mouse X" are both true,
  fill the ellipse with red.

  otherwise, circle move front or back
  */

  if (circleX - 5 < mouseX && circleX + 5 > mouseX
    && circleY - 5 < mouseY && circleY +5 > mouseY) {
    fill(255, 0, 0);
  }


  if(circleX < 0 || circleX > width) {
    circleX = circleX * -1;
  }
  /*
  else {
    circleX = circleX -1;
  }
  */

  ellipse (circleX, circleY, 10, 10);
}

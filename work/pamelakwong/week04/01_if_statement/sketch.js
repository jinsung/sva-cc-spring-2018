var circleX = 0;

function setup() {
  createCanvas(500,500);

}

function draw() {
  background(200);
  fill(255, 255, 255);

  /*if mouseX is in between the circle,
  then it becomes red
  */

  if (circleX  - 5 < mouseX && circleX + 5 > mouseX) {
    fill(255, 0 , 0);
  } else if (circleX < mouseX) {
    circleX = circleX + 1;
  } else if (circleX >= mouseX) {
    circleX = circleX - 1;
  }

  ellipse(circleX, height/2, 10, 10);

}

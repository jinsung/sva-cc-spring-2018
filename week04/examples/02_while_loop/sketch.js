var circleX;

function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(200);

  circleX = 0; // initialization
  while(circleX <= width) { // boolean experssion
    ellipse(circleX, height/2, 30, 30);
    circleX = circleX + 10; // incremental operation.
  }


}

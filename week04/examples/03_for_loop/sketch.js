var circleX;

function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(200);


  for(circleX = 0; circleX <= width; circleX = circleX + 30) {
    ellipse(circleX, height/2, 30, 30);
  }


}

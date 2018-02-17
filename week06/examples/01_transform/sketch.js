
function setup() {
  createCanvas(501, 501);
}

function draw() {
  background(255);
  fill(200);
  //translate(width/2, height/2);
  //rotate(radians(45));
  //rect(0, 0, 100, 100);
  rect( width/2, height/2, 100, 100 );
  drawGrid();
}

function drawGrid() {
  push();
  noFill();
  stroke(0, 100);
  for (var x = 0; x < width; x +=10 ) {
    line(x, 0, x, height);
  }
  for (var y = 0; y < height; y += 10) {
    line(0, y, width, y);
  }
  pop();
}

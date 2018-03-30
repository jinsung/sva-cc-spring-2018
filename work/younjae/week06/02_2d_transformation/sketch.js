var angle = 0;
function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  rectMode(CENTER);
}


function draw() {
  background(66, 244, 188);
  translate(100, 100);
  rotate(angle);
  rect (0, 0, 100, 100);
  angle = angle + 1;
}

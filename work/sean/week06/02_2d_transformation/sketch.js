var angle = 0;
var s;

function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
  rectMode(CENTER);
  s = second();
}

function draw() {
  background(200);
  translate(100,100)
  rotate(angle);
  rect (0, 0, 100, 100);
  angle = angle + 1;
}

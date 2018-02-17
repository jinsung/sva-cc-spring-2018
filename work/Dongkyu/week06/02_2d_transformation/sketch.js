var angle = 0;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(200);
  translate(100, 100); //translate the canvas!!!
rotate(angle); //45 degree, radient value
  rect(0, 0, 100, 100);
  angle = angle + 1;
}

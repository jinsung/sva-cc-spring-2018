var angle;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
  angle = 0;
}

function draw() {
  background(200);


var rectWidth = width;
translate(width/2, height/2);
var numOfRect = 50;
for( var i=0; i < 50; i = i + 1){
  push();
  var fi = i / numOfRect;
  rotate(fi * mouseX);
  fill(0, fi * 150, mouseX)
  rect(0, 0, rectWidth, rectWidth);
  rectWidth = rectWidth - 10;
  pop()
}

}

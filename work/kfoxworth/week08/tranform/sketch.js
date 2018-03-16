var angle;

function setup() {
 createCanvas(500, 500);
 angleMode(DEGREES);
 rectMode(CENTER);
 angle = 0;

}

function draw() {
  background(200);

  var rectWidth = width;
  translate(width/2, height/2);
  var numbRect = 50;
  for(var i = 0; i < numbRect; i = i + 1) {
    push();
    var fi = i / numbRect;
    rotate(fi * mouseX);
    fill(fi * 200, fi * mouseY, 0);
    rect(0, 0, rectWidth, rectWidth);
    rectWidth = rectWidth - 10;
    pop();
  }
}

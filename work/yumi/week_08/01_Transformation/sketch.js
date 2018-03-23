var angle;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  rectMode(CENTER);
  angle = 0;

}

function draw() {
  background(0);
  noStroke();
  //stroke(255, 50);

  var rectWidth = width;
  translate(width/2, height/2);

  var numOfRect = 50;

  for(var i = 0; i < numOfRect; i = i + 1){

    push()
    var fi = i / numOfRect;
    fill(0 + mouseX, 0, 255*fi, mouseY);
    rotate(fi * mouseX);
    rect(0, 0, rectWidth, rectWidth);
    rectWidth = rectWidth - 10;
    pop();
  }
}

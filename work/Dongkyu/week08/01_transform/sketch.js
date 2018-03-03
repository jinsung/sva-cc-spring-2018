var angle;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  rectMode(CENTER);
  //noStroke();
  angle = 0;
}

function draw() {
  background(200);
  /* No.1
  push();
    translate(100, 100);
    rotate(angle); //degree, rotate value has to be next, otherwise...
    scale(2, 3); //width and height
    rect (0, 0, 50, 50); // place 100 to 0
  pop();

  push();
    translate(200, 200);
    translate(100, 100);
    rect(0, 0, 10, 10); // compare sclae() and just size
  pop();

  angle = angle + 1;
  */

  var rectWidth = width;
  translate(width/2, height/2);
  var numOfRect = 50;
  for( var i = 0; i < numOfRect; i = i + 1) { //i stands for index
    push();
    var fi = i / numOfRect;
    rotate(i / numOfRect * mouseX); // 0 to 49 devide by 50
    fill(fi * mouseX, fi * mouseY, mouseX / 2);
    rect(0, 0, rectWidth, rectWidth);
    rectWidth = rectWidth - 10;
    pop();
  }


}

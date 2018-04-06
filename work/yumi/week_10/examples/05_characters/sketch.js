var charObjs = [];
var chars = "Hello World!";
var nextCharXPos = 0;
var charSize = 10;
function setup() {
  createCanvas(500, 500);
  smooth();
  var numOfBalls = 5;
  textFont('COURIER');
  for (var i=0; i<chars.length; i++) {
    charObjs[i] = new MovingChar(chars[i], nextCharXPos, height/2, charSize, 0.07);
    nextCharXPos += charSize;
  }
}

function draw() {
  background(200);
  push();
  translate(width/2 - nextCharXPos, 0);
  for (var i=0; i<charObjs.length; i++) {
    charObjs[i].move();
    charObjs[i].bounce(width, height);
    charObjs[i].draw();
  }
  pop();
}

function keyPressed() {

  var newChar = new MovingChar(key, nextCharXPos, height/2, size, 0.07);
  charObjs.push(newChar);
  nextCharXPos += charSize;

}

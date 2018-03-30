var charObjs = [];
var chars = "type:";
var nextCharXPos = 0;
var charSize = 50;
var value = 0;


function setup() {
  createCanvas(500,500);
  smooth();
  textFont('COURIER');
  for (var i=0; i<chars.length; i++) {
    charObjs[i] = new MovingChar(chars[i], nextCharXPos, height/2, charSize, 0.07);
    nextCharXPos += charSize;
  }
}

function draw() {
  background(value);
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

  if (value === 0) {
    value = 230;
  } else {
    value = 0;
  }

}

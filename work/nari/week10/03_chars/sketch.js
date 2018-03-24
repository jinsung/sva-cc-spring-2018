var charObjs = [];
var myString = "Hello World!"
var xPos = 0;
var charSize = 24;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  textFont ('Courier');

  for (var i = 0; i < myString.length; i++){
    var char = myString[i];
    charObjs[i] = new MovingChar (char, xPos, height/2, charSize, 0.1, 25);
    xPos += charSize;
  }
}


function draw() {
  background(250);

  for (var i = 0; i < charObjs.length; i++) {
    charObjs[i].move();
    charObjs[i].display();
  }
}

function keyPressed() {
  var newChar = new MovingChar (key, xPos , height/2, charSize, 0.1, 0);
  charObjs.push(newChar);
  xPos += charSize;
}

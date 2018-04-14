var charObjs = [];
var myString = "HELP ME!!"
var xPos = 0;
var charSize = 35;

function setup() {
  createCanvas(500, 500);
  textFont ('Avenir');
  textSize (30);
  for (var i = 0; i < myString.length; i++) {;
    var char = myString[i];
    charObjs[i] = new movingChar(char,
                                xPos,
                                height/2,
                                charSize,
                                0.07,
                                0);
   xPos += charSize;

  }
}

  function draw() {
    background(200);

    for (var i = 0; i < charObjs.length; i++) {

    charObjs[i].move();
    charObjs[i].display();

  }
}

function keyPressed(){
  var newChar = new movingChar( key, xPos, height/2, charSize, 0.1, 0);
  charObjs.push(newChar);
  xPos += charSize;
}

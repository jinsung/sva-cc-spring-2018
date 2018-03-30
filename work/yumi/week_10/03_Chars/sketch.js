var chars = [];
var myString = "Hello World";
var xPos = 0;
var charSize = 15;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  textFont('Courier');
/*
  for(var i = 0; i < myString.length; i ++){
    var char = myString[i];
    chars[i] = new MovingChar(char, xPos, height/2, charSize, 0.07, 255);
    xPos += charSize;
  }
  */
}

function draw() {
  background(0);
  for(i = 0; i < chars.length; i ++){
    chars[i].display();
    chars[i].move();
  }
}

function keyPressed(){
  var newChar = new MovingChar(key, xPos, height/2, charSize, 0.07, color(random(0, 255), random(0, 255), random(0, 255)))
  chars.push(newChar);
  xPos += charSize;
}

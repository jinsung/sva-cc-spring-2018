var r = 0;
var g = 0;
var b = 0;
var xPos;
var xSize = 100;
var yPos = 0;
var plus = 0;
//var up = -1;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
    //setTimeout('move', 1000);


}

function draw() {
  b = 255;
  xPos = width/2;
  yPos = yPos + plus;

  background(0);
  flower1();
  flower2();
  flower3();
  bg();
  pulse();
}

function flower1(){

  stroke(r, g, b, 125);
  fill(r, g, b, 50);
  ellipse(xPos - width/4, height/2 - yPos*1.5, width/7 + 50);
  line(xPos - width/4, 0 + yPos, xPos - width/4, height);

  for(var size1 = 0; size1 < width/7; size1 = size1 + 1){
    stroke(r, g, b, random(0, 10) + size1);
    noFill();
    ellipse(xPos - width/4, height/2 + yPos*0.75, size1);
  }

  stroke(r, g, b);
  ellipse(xPos - width/4, height/2 + yPos*1.5, xSize);
}

function flower2(){

  stroke(r, g, b, 125);
  fill(r, g, b, 50);
  ellipse(xPos, height/2 + yPos*1.25, width/7 + 50);
  line(xPos, 0, xPos, height - yPos);

  for(var size1 = 0; size1 < width/7; size1 = size1 + 1){
    stroke(r, g, b, random(0, 10) + size1);
    noFill();
    ellipse(xPos, height/2 - yPos*0.75, size1);
  }

  stroke(r, g, b);
  ellipse(xPos, height/2 - yPos*1.25, xSize);
}

function flower3(){

  stroke(r, g, b, 125);
  fill(r, g, b, 50);
  ellipse(xPos + width/4, height/2 - yPos*0.4, width/7 + 50);
  line(xPos + width/4,  0 + yPos*2, xPos + width/4, height);

  for(var size1 = 0; size1 < width/7; size1 = size1 + 1){
    stroke(r, g, b, random(0, 10) + size1);
    noFill();
    ellipse(xPos + width/4, height/2 + yPos*2, size1);
  }

  stroke(r, g, b);
  ellipse(xPos + width/4, height/2 + yPos*0.35, xSize);
}

function pulse(){
  xSize = xSize + 1.5;
  if(xSize > width/7){
    xSize = width/21;
  }
}

function bg(){
  for(var bg = 0; bg < height; bg = bg + 1){
    stroke(r,g,b, 0 + bg * 0.1);
    line (0, bg, width, bg);
  }
}


function mouseClicked(){
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);

  plus = 1;


}

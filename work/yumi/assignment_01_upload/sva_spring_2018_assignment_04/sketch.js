var r = 0;
var g = 0;
var b = 0;
var r1 = 0;
var g1 = 0;
var b1 = 0;
var xPos1 = 0;
var yPos1 = 0;
var yPos2 = 0;
var xSize = 0;
var color = 0;

var bell1;
var bell2;
var bell3;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  soundFormats('wav');
  bell1 = loadSound('assets/bell_01.wav');
  bell2 = loadSound('assets/bell_02.wav');
  bell3 = loadSound('assets/bell_03.mp3');

}

function draw() {
  background(0);
  bell_01();
  bell_02();
  bell_03();

  ball_01();
  ball_02();
  ball_03();

  grid();

  b = 255;
  xSize = 150;

}

function grid(){
  stroke(r, g, b, 100);
  line(0, height/2, width, height/2);
  line(width/4, 0, width/4, height);
  line(width - width/4, 0, width - width/4, height);

}

function ball_01(){
  yPos1 = yPos1 + 2.5;
  fill(r, g, b, 100);
  ellipse(width/4, yPos1, xSize);
  if(yPos1 > height/2 - 40 && yPos1 < height/2 + 40){
    g = random(200, 255);
    bell2.play();
    //background(r1, g1, b1);
    //b = 255;
  }
}

function ball_02(){
  xPos1 = xPos1 + 7.5;
  fill(r, g, b, 100);
  ellipse(xPos1, height/2, xSize);
  if(xPos1 > width/2 - 100 && xPos1 < width/2 + 100){
    r = random(200, 255);
    bell1.play();
  }
}

function ball_03(){
  yPos2 = yPos2 + 1.65;
  fill(r, g, b, 100);
  ellipse(width - width/4, height - yPos2, xSize);
  if(yPos2 > height/2 - 40 && yPos2 < height/2 + 40){
    r = random(100, 150);
    g = 50;
    bell3.play();
  }
}

function bell_01(){
  for(var size1 = 0; size1 < width/6; size1 = size1 + 1){
    stroke(r, g, b, 255 - size1*1.5);
    noFill();
    ellipse(width/4, height/2, size1);
  }
}

function bell_02(){
  for(var size1 = 0; size1 < width/6; size1 = size1 + 1){
    stroke(r, g, b, 255 - size1*1.5);
    noFill();
    ellipse(width/2, height/2, size1);
  }
}

function bell_03(){
  for(var size1 = 0; size1 < width/6; size1 = size1 + 1){
    stroke(r, g, b, 255 - size1*1.5);
    noFill();
    ellipse(width - width/4, height/2, size1);
  }
}






/*
function mousePressed(){
  if(bell1.isPlaying()){
    bell1.stop();
  } else {
    bell1.play();
  }

}

*/

var time = 0;
var randomColor;
var randomCornerNum;
var myRandomNumX;
var myRandomNumY;
var myRandomNumR;
var myRandomNum;
var myRandomSize;
var circleX;
var circleY;
var randomB;

function setup() {
  createCanvas(1680, 900);
  background(255, 255, randomColor);
  //noCursor ();

  circleX = 840;
  circleY = 450;
  speedX = 100;
  speedY = 80;
}

function draw() {
  randomColor = random (255);
  rectMode (CENTER);
  var space = 50;
  var circleSize = 40;
  //var rectCorner = 1;
  myRandomNumX = random(width);
  myRandomNumY = random(height);
  myRandomNumR = random(255);
  myRandomNum = random(255);
  myRandomSizeX = random(1680);
  myRandomSizeY = random(800);
  randomB = random(255);




  time = time + 0.03;
  for ( var circleX = 0; circleX < width; circleX = circleX + space ) {
    for ( var circleY = 0; circleY < height; circleY = circleY + space ) {
    var noiseVal = noise( Math.sin(circleX * 10), Math.sin(circleY * 10), time );
    randomCornerNum = (15);
    circleSize = noiseVal * 100;
    //rectCorner = noiseVal * 30;
    fill(mouseX / 6, mouseY / 3.4, myRandomNumR);
    rect(circleX, circleY, circleSize, circleSize, randomCornerNum);
    fill(mouseY / 3.4, mouseX / 6, myRandomNumR);
    ellipse(myRandomNumX, myRandomNumY, 160, 160);
    fill(mouseY / 3.4, mouseX / 6, myRandomNumR);
    rect(myRandomNumX, myRandomSizeY, 160, 160);
  }

  }

  }

//console.log(counter);

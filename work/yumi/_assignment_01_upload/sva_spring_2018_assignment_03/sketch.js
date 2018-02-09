var satelliteSize = 5;
var strokeAlpha = 0;
var fillAlpha = 0;
var fillAlphaRed = 0;
var xPos = 0;
var yPos = 0;
var scanPos = 0;
var bgColor = 0;
var warning;
var loop;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  warning = loadSound('assets/warning.mp3');

}

function draw() {
background(bgColor);

//airplane
xPos = xPos + random(- 0.5, random(1, 3));
yPos = yPos + random(- 0.3, random(0, 2));
noStroke();
fill(random(0, 255), 0, random(0, 255), fillAlphaRed);
ellipse(xPos, yPos, 20, 20);


//grid
  for(var gridX = 0; gridX < width; gridX = gridX + width/4){
    stroke(255, 50);
    line(gridX, 0, gridX, height);
    }
  for(var gridY = 0; gridY < height; gridY = gridY + height/4){
    stroke(255, 50);
    line(0, gridY, width, gridY);
  }

  for(var dotX = width/4; dotX < width; dotX = dotX + width/4){
    for(var dotY = height/4; dotY < height; dotY = dotY + height/4){
    color = random(0, 255);
    noStroke();
    fill(color);
    ellipse(dotX, dotY, 5, 5);
    }
  }

//alarm
  for(var satelliteX = width/4; satelliteX < width; satelliteX = satelliteX + width/4){
    for(var satelliteY = height/4; satelliteY < height; satelliteY = satelliteY + height/4){
      satelliteSize= satelliteSize + 0.1;
      stroke(255, 70, 0, strokeAlpha);
      fill(255, fillAlpha);
      ellipse(satelliteX, satelliteY, satelliteSize, satelliteSize);
      if(satelliteSize > 100){
        satelliteSize = 0;
      }
      stroke(random(0, 255), 70 ,0, fillAlphaRed);
      ellipse(satelliteX, satelliteY, 5, 5);
    }
  }
}


function mousePressed() {
  strokeAlpha = 200;
  fillAlpha = 35;
  fillAlphaRed = 255;
  //bgColor = (255, 0, 0);

  if (warning.isPlaying()){
    warning.stop();
  } else {
    warning.play();
  }
}

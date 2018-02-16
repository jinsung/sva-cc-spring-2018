var x1 = 0;
var x2 = 200;
var x3 = 0;
var x4 = 400;
var x5 = 0;
var x6 = 100;

var moonSize = 0;
var starSize = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

}

function draw() {
  background(0);

  moonSize = width/5
  starSize = width/90

  noStroke();
  fill(255);
  ellipse(width/2, height/3, moonSize);

  noStroke();
  fill(0);
  ellipse(width/2 + width/4 - mouseY*0.25, height/3, moonSize);

  x1 = x1 + 1.5;
  noStroke();
  fill(random(0, 200), 0 + mouseY*0.25);
  ellipse(x1, height/8, starSize);
  if(x1 > width){
    x1 = 0;
  }

  x2 = x2 + 1
  noStroke();
  fill(random(0, 200), 0 + mouseY*0.25);
  ellipse(x2, height/4, starSize);
  if(x2 > width){
    x2 = 0;
  }

  x3 = x3 + 2
  noStroke();
  fill(random(0, 200), 0 + mouseY*0.25);
  ellipse(x3, height/4 + 15, starSize);
  if(x3 > width){
    x3 = 0;
  }

  x4 = x4 + 2.5
  noStroke();
  fill(random(0, 200), 0 + mouseY*0.25);
  ellipse(x4, height/2, starSize);
  if(x4 > width){
    x4 = 0;
  }

  x5 = x5 + 3.5
  noStroke();
  fill(random(0, 200), 0 + mouseY*0.25);
  ellipse(x5, height/2 - 200, starSize);
  if(x5 > width){
    x5 = 0;
  }

  x6 = x6 + 1.5
  noStroke();
  fill(random(0, 200), 0 + mouseY*0.25);
  ellipse(x6, height/2 - 100, starSize);
  if(x6 > width){
    x6 = 0;
  }


/*
  for(var yTop = 0; yTop < mouseY - 50 ; yTop = yTop + 2){
    stroke(random(70, 120), 0, random(200, 255));
    strokeWeight(1);
    line(0, yTop, width, yTop);
  }
*/
  for(var yBottom = height; yBottom  > mouseY - 100; yBottom  = yBottom - 2){
    stroke(0, random(100, 120), 255);
    strokeWeight(1);
    line(0, yBottom, width, yBottom);
  }


}

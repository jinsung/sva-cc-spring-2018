var rectWidth;
var rectHeight;
var counter;

function setup() {
  createCanvas(1000, 700);
  rectWidth = 15;
  rectHeight = 3;
  counter = 0;
  rectMode(CENTER);
  noStroke();
}

function draw() {
  updateTime();
  background(230);
  fill( 250, 220, 196);
  ellipse( 700, 200, 400, 400);
  fill( 255, 255, 255);
  ellipse( 600, 150, 50, 100);
  ellipse( 750, 150, 50, 100);
  fill( 0, 0, 0);
  rect(675,220, 20,10);
  ellipse( 600, 175, 40, 70);
  ellipse( 750, 175, 40, 70);
  ellipse(675, 300, 160, 100+0.1*-mouseY);
  rect(500,700, 1000,300);
  fill( 102, 79, 60);
  rect(500,500, 1000,300);
  fill( 250, 210, 196);
  ellipse( 500, 350, 150, 75);
  ellipse( 800, 350, 150, 75);


  var hoursAngle = map(hours, 0, 12, 0, 360);
  var minutesAngle = map(minutes, 0, 60, 0, 360);
  var secondsAngle = map(seconds, 0, 60, 0, 360);
  noStroke();
  fill(180, 130, 50);
  rect(250,mouseY, 1100,20);
  triangle(800, mouseY-10, 800, mouseY+10, 950, mouseY);

  fill(secondsAngle,0, 0);
  triangle(575, mouseY+120, 825, mouseY+120, 700, mouseY-110);

  fill(minutesAngle, minutesAngle, 0);
  ellipse( 500, mouseY, 250, 250);

  fill(hoursAngle, 125, 0);
  rect(250,mouseY, 250,200);


  fill( 255, 0 , 0);
  var mult = Math.PI;
  for (var y = rectWidth; y < width; y+=rectWidth) {
    if (y > width/2 * 0.33) {
      mult = Math.PI * 0.33;
    }
    if (y > width/2 * 0.66) {
      mult = Math.PI * 0.66;
    }
    for (var x = rectHeight; x < height; x+=rectHeight) {
      push();
      var n = noise(x*0.02, y*0.0038, counter*0.01)*2.0;
      translate(x, y);
      rotate(mult*n);
      rect(500, rectHeight, rectWidth, rectHeight);
      pop();

    }
  }
  counter++;

}


function updateTime() {
  hours = hour();
  if (hours > 12) {
    hours = hours - 12;
  }
  minutes = minute();
  seconds = second();
}

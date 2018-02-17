function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(210);
  updateTime();
  drawClock();

}

function drawClock() {
  fill(235);

  var hoursAngle = map(hours, 0, 12, 0, 360);
  var minutesAngle = map(minutes, 0, 60, 0, 360);
  var secondsAngle = map(seconds, 0, 60, 0, 360);
  push();
  strokeWeight(10);
  translate(width/2, height/2);
  ellipse( 0, 0, 320, 320);
  rotate(-90);
  push();
  stroke( 100 );
  rotate(hoursAngle);
  line(0, 0, 80, 0);
  pop();

  push();
  stroke( 90 );
  strokeWeight(8);
  rotate(minutesAngle);
  line(0, 0, 120, 0);
  pop();

  push();
  stroke( 200, 0, 0 );
  strokeWeight(3);
  rotate(secondsAngle);
  line(0, 0, 130, 0);
  pop();

  pop();
}

function updateTime() {
  hours = hour();
  if (hours > 12) {
    hours = hours - 12;
  }
  minutes = minute();
  //var sDiff = seconds - second();
  //seconds = seconds - sDiff * 0.1;
  seconds = second();
}

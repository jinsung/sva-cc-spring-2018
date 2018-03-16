var seconds;
var hours;
var minutes;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  seconds = 0;
  thisHour = 0;
}

function draw() {
  background(200);
  updateClock();

//0 to 60 becomes 0 to 360 so that we can rotate the line based on seconds
//-90 to make the 0 point at the top, like a clock
  var secondsAngle = map (seconds, 0, 60, 0, 360) - 90;

  translate(width/2, height/2);

  push();
  noStroke();
  ellipse (0, 0, width *0.9, height *0.9);
  pop();

  push();
  rotate(secondsAngle);
  stroke(255,0,5);
  line(0, 0, width/2 * 0.8, 0);
  pop();

//hour;
  var hoursAngle = map (hours, 0, 12, 0, 360) - 90;

  push();
  rotate(hoursAngle);
  strokeWeight(6);
  line(0, 0, width/3.5, 0);
  pop();

//minutes
  var minutesAngle = map (minutes, 0 , 60, 0, 360) - 90;

  push();
  rotate(minutesAngle);
  strokeWeight(4);
  line(0, 0, width/2.6, 0);
  pop();
}

function updateClock() {
  seconds = second();
  minutes = minute();
  hours = hour();
}

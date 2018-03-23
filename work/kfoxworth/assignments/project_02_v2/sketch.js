var seconds;
var hours;
var minutes;

function setup() {
 createCanvas(500, 500);
 angleMode(DEGREES);
 seconds = 0;

}

function draw() {
  background(200);
  updateClock();

  var secondsAngle = map(seconds, 0, 60, 0, 360) - 90;
  var hoursAngle = map(h, 0, 12, 0, 360) - 90;
  var minutesAngle = map(m, 0, 60, 0, 360) - 90;

  translate(width/2, height/2);
  
  push();
  noStroke();
  ellipse(0, 0, width * 0.9, height * 0.9);
  pop();

  push();
  strokeWeight(10);
  rotate(hoursAngle);
  line(0, 0, width/2 * 0.4, 0);
  pop();

  push();
  strokeWeight(10);
  rotate(minutesAngle);
  line(0, 0, width/2 * 0.6, 0);
  pop();

  push();
  strokeWeight(5);
  stroke(255, 20, 0);
  rotate(secondsAngle);
  line(0, 0, width/2 * 0.8, 0);
  pop();

  push();
  noStroke();
  fill(255, 20, 0);
  ellipse(0, 0, width * 0.04, height * 0.04);
  pop();

}

function updateClock() {
  seconds = second();
  h = hour();
  if (h > 12) {
    h = h - 12;
  }
  m = minute();
}

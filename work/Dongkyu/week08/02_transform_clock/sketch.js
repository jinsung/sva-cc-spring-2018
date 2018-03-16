var seconds;
var minutes;
var hours;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  seconds = 0;
  minutes = 0;
  hours = 0;
}


function draw() {
  background(200);
  updateClock();

  var secondsAngle = map( seconds, 0, 60, 0, 360) - 90; // -90 because clock starts with 12(top middle part)
  var minutesAngle = map( minutes, 0, 60, 0, 360) - 90;
  var hoursAngle = map( hours, 0, 12, 0, 360) - 90;


  translate(width / 2, height / 2);
  ellipse( 0, 0, width * 0.9, height * 0.9);

  push();
    strokeWeight( 1 );
    rotate(secondsAngle);
    stroke(255, 0, 0);
    line(0, 0, width / 2 * 0.8, 0);
  pop();

  push();
    strokeWeight(3);
    rotate(minutesAngle);
    stroke(0, 100, 250);
    line(0, 0, width / 2 * 0.7, 0);
  pop();

  push();
    strokeWeight(10);
    rotate(hoursAngle);
    stroke(0, 0, 255);
    line(0, 0, width / 2 * 0.5, 0);
  pop();




}

function updateClock() {
  seconds = second();
  minutes = minute();
  hours = hour();
  if(hours > 12) {
    hours = hours - 12;
  }
}

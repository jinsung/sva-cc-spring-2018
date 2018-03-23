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

  var secondsAngle = map( seconds, 0, 60, 0, 360) - 90;
  //map( subject, minvalue, maxvalue, minvale, extendmaxvalue)
  var minutesAngle = map( minutes, 0, 60, 0, 360) - 90;
  var hoursAngle = map( hours, 1, 12, 0, 360) - 90;

push();
  translate (width/2, height/2);
  rotate(secondsAngle);
  stroke(255, 0, 0);
  line(0, 0, width/2 * 0.8, 0);
pop();

push();
  translate (width/2, height/2);
  rotate(minutesAngle);
  stroke(50, 0, 200);
  line(0, 0, width/2 * 0.5, 0);
pop();

push();
  translate (width/2, height/2);
  rotate(hoursAngle);
  line(0, 0, width/2 * 0.3, 0);
pop();


}

function updateClock(){

  seconds = second();
  minutes = minute();
  hours = hour();
}

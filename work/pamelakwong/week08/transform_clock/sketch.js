var hours;
var minutes;
var seconds;


function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  seconds = 0;
  hours = 0;
  minutes = 0;
}

function updateClock() {
  hours = hour();
  if (hours > 12) {
    hours = hours - 12;
  }
  minutes = minute();
  seconds = second();

}

function draw() {
   background(200);
   updateClock();

   var secondsAngle = map(seconds, 0, 60, 0, 360) - 90;
   var minutesAngle = map(minutes, 0, 60, 0, 360) - 90;
   var hoursAngle = map(hours, 0, 12, 0, 360)-90;

   translate (width/2, height/2);
   ellipse(0, 0, width * 0.9, height * 0.9);

   push();
   strokeWeight(1);
   stroke(255, 0, 0);
   rotate(secondsAngle);
   line(0, 0, width/2 * 0.8, 0);
   pop();

   push();
   strokeWeight(3);
   rotate(minutesAngle);
   line(0, 0, width/2 * 0.7, 0);
   pop();

   push();
   strokeWeight(10);
   rotate(hoursAngle);
   line(0, 0, width/2 * 0.5, 0);
   rotate();
   pop();

}

var h;
var m;
var seconds;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  seconds = 0;
  hours = 1
  minutes = 0;
}


function draw() {
  background(200);
  updateClock();

  var secondsAngle = map ( seconds, 0, 60, 0, 360) - 90;
  var hoursAngle = map ( h, 0, 12, 0, 360) - 90;
  var minutesAngle = map ( m, 0, 60, 0, 360) - 90;
  translate (width/2, height/2);
  ellipse( 0, 0, width * 0.9, height * 0.9);

  push();
  strokeWeight (1);
  stroke(255,0, 0);
  rotate(secondsAngle);
  line(0, 0, width/2 * 0.2, 0);
  pop();


  push();
  strokeWeight (3);
  stroke(255,200, 0);
  rotate(hoursAngle);
  line(0, 0, width/2 * 0.4, 0);
  pop();


  push();
  strokeWeight (10);
  stroke(255,0, 0);
  rotate(minutesAngle);
  line(0, 0, width/2 * 0.5, 0);
  pop();
}

function updateClock(){
  seconds = second();
  h = hour ()
  if (h > 12) {
    h = h - 12
    }
    m = minute ();
}

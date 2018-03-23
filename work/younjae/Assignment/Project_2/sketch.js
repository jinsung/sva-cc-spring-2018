var angle;
var seconds;
var m;
var h;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  seconds = 0;
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
  angle = 0;

}


function draw() {
  background(200);

  var rectWidth = width;
  translate(width/2, height/2);

  var numOfRect = 50;

  for( var i = 0; i < numOfRect; i = i + 1) {
    push();
    var fi = i / numOfRect;
    rotate(fi * second());
    fill(fi * mouseX, fi * mouseY, mouseX/2);
    rect(0, 0, rectWidth, rectWidth);
    rectWidth = rectWidth - 10;
    pop();


  updateClock();

  var secondsAngle = map( seconds, 0, 60, 0, 360) - 90;
  var minutesAngle = map( m, 0, 60, 0, 360) - 90;
  var hoursAngle = map( h, 0, 12, 0, 360) - 90;


  translate (width/2, height/2);

push();
  strokeWeight( 1 );
  stroke(255, 0, 0);
  rotate(secondsAngle);
  line(0, 0, width/2 * 0.8, 0);
pop();

push();
  strokeWeight( 3 );
  stroke(55, 55, 55);
  rotate(minutesAngle);
  line(0, 0, width/2 * 0.7, 0);
pop();

push();
  strokeWeight( 10 );
  stroke(55, 55, 55);
  rotate(hoursAngle);
  line(0, 0, width/2 * 0.5, 0);
pop();

}

function updateClock(){

  seconds = second();
  h = hour();
  if (h > 12){
    h = h - 12;
  }
  m = minute();

}

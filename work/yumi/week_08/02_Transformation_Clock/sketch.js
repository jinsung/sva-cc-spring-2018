var seconds;
var hr;
var min;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  seconds = 0;
  hr = 0;
  min = 0;
}

function draw() {
  background(0);
  updateClock();

  var secondsAngle = map(seconds, 0, 60, 0, 360)-90;
  var minAngle = map(min, 0, 60, 0, 360)-90;
  var hrAngle = map(hr, 0, 12, 0, 360)-90;

  translate(width/2, height/2);
  ellipse(0, 0, width*0.9, height*0.9);
  push();
  strokeWeight(1);
  stroke(0, 0, 255);
  rotate(secondsAngle);
  line(0, 0, width/2*0.8, 0);
  pop();

  push();
  strokeWeight(3);
  rotate(minAngle);
  line(0, 0, width/2*0.8, 0);
  pop();

  push();
  strokeWeight(5);
  rotate(hrAngle);
  line(0, 0, width/2*0.8, 0);
  pop();

}

function updateClock(){
  seconds = second();
  hr = hour();
  if(hr > 12){
    hr = hr - 12;
  }
  min = minute();
}

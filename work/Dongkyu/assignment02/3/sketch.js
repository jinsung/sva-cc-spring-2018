var time = 0;
var randomCornerNum;

function setup() {
  createCanvas(1680, 900);
  angleMode(DEGREES);
  textFont("Helvetica", [18]);
  seconds = 0;
  minutes = 0;
  hours = 0;

}

function draw() {
background(noiseVal * 20, noiseVal * 10, noiseVal * 15);

rectMode(CENTER);
var space = 50;
var circleSize = 40;

time = time + 0.03;
for ( var circleX = 0; circleX < width; circleX = circleX + space ) {
  for ( var circleY = 0; circleY < height; circleY = circleY + space ) {
  var noiseVal = noise( Math.sin(circleX * 10), Math.sin(circleY * 10), time );
  circleSize = noiseVal * 100;

  updateClock();
  var secondsAngle = map( seconds, 0, 60, 0, 360) - 90; // -90 because clock starts with 12(top middle part)
  var minutesAngle = map( minutes, 0, 60, 0, 360) - 90;
  var hoursAngle = map( hours, 0, 12, 0, 360) - 90;

  randomCornerNum = 15;
  fill (circleSize * 5, circleSize * 4.3, circleSize * 4);
  rotate(mouseX / 2);



  var textX = 30;
  var textY = 60;
  push();
  translate(width * noiseVal, height * noiseVal);
  push();
    rotate(secondsAngle);
    text("Seconds: " + seconds, textX, textY );
  pop();

  push();
    rotate(minutesAngle);
    text("Minutes: " + minutes, textX, textY );
  pop();

  push();
    rotate(hoursAngle);
    text("Hours: " + hours, textX, textY );
  pop();
  pop();


}
console.log ("Time is");
  console.log ("not our friend.");
}
}

function updateClock() {
  seconds = second();
  minutes = minute();
  hours = hour();
  if(hours > 12) {
    hours = hours - 12;
  }
}

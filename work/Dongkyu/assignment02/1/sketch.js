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
  var textnoiseVal = noise( Math.cos(circleX * 20), Math.cos(circleY * 10), time );
  circleSize = noiseVal * 100;

  updateClock();
  randomCornerNum = 15;
  fill (circleSize * 5, circleSize * 4.3, circleSize * 4);
  translate(noiseVal * noiseVal * 10, noiseVal * 10);
  rotate(mouseX / 2);
  rect (circleX, circleY, circleSize, circleSize, randomCornerNum);

  push();
  translate(width * textnoiseVal / 4, height * textnoiseVal / 4);
  text(hours + ':' + minutes + ':' + seconds, circleX, circleY );
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
}

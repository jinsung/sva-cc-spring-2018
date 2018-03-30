var time = 0;
var randomCornerNum;

function setup() {
  createCanvas(1680, 900);

}

function draw() {
background(noiseVal * 20, noiseVal * 10, noiseVal * 15);

rectMode(CENTER);
var space = 50;
var circleSize = 40;

time = time + 0.03;
for ( var circleX = 0; circleX < width; circleX = circleX + space ) {
  for ( var circleY = 0; circleY < height; circleY = circleY + space ) {
  var noiseVal = noise( Math.sin(circleX * 10), Math.cos(circleY * 10), time );
  circleSize = noiseVal * 100;
  randomCornerNum = 15;
  fill (circleSize * 5, circleSize * 4.3, circleSize * 4);
  rect (circleX, circleY, circleSize, circleSize, randomCornerNum);

}
//console.log ("hello"); }
  //console.log ("bye");
}
}

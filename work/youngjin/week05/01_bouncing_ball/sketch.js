var circleX;
var circleY;
var speedX;
var speedY;

function setup() {
  createCanvas(500, 500);
  circleX = 0;
  circleY = 0;
  speedX = 1.5;
  speedY = 1.4;
}

function drawCircle ( x, y, numOfCircles, circleSize ){
  // drawing a circle.
  for ( var i = 0; i < numOfCircles; i = i + 1) {
    var step = i / (numOfCircles - 1); // 0 - 1;
    circlesize = circleSize * ( 1 - step);
    fill( step * 255 );
    ellipse( x, y, circleSize, circleSize );
  }
}

function draw() {
  background(200);

  drawCircle( width/2, height/2, 7, 200 );
  drawCircle( 100, 100, 5, 100 );
  drawCircle( 400, 300, 10, 200 );

}

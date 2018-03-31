var circleX = 10;
var circleY = 10;

var circleXSpeed = 3;
var circleYSpeed = 5;

var circleSize = 30;

function setup() {
  createCanvas(500,500);
}



function drawCircle(x, y, numOfCircles, circleSize) {
  //Drawing a Circle.
  for ( var i = 0; i < numOfCircles; i = i + 1) {
    var iseg = i / numOfCircles; // 0 -1;
    var seg = circleSize / numOfCircles;
    var inverseIndex = numOfCircles - i - 1;
    circleSize =  circleSize * ( 1 - iseg );
    fill ( iseg * 255);
    ellipse(x, y, circleSize, circleSize);

  }

}


function draw () {
  background(200);
  drawCircle( 100, 100, 2 , 200);
  drawCircle( width/2, height/2, 10 , 200);
  drawCircle( 400, 400, 20 , 200);
}

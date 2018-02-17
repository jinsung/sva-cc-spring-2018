var circleX;
var circleY;
var speedX;
var speedY;

function setup() {
  createCanvas (500, 500);
  //noStroke ();
  circleX = 0;
  circleY = 0;
  speedX = Math.sin(8) * 9;
  speedY = Math.cos(8) * 12;

}

function bounce() {
  // 1. check if it hit the bound.
  if (circleX < 0 || circleX > width) {
    speedX = speedX * -1;
  }

  if (circleY < 0 || circleY > height) {
    speedY = speedY * -1;
  }
}

function move() {
  // 2. move the circle.
  circleX = circleX + speedX;
  circleY = circleY + speedY;
}

function drawCircle ( x, y, numOfCircles, circleSize, color ) {
  // 3. drawing a circle.
  //var circleSize = 100;

  for (var i  = 0; i < numOfCircles; i += 1) {
    //fill( color, color/2, 255); what I did //jinsung's example folder. start with big circle and going to decrease.
    var step = i / (numOfCircles - 1); // range from 0 to 1;
    var seg = circleSize / numOfCircles;
    var inverseIndex = numOfCircles - i + 1;
    circleSize = circleSize * ( 1 - iseg);
    fill( iseg * 255 );
    ellipse( x, y, circleSize, circleSize);
    circleSize = inverseIndex * seg;
    //color = color - 20; what I did
  }
  /*ellipse( circleX, circleY, circleSize, circleSize );
  circleSize = circleSize - 10;
  ellipse( circleX, circleY, circleSize, circleSize );
  circleSize = circleSize - 10;
  ellipse( circleX, circleY, circleSize, circleSize );
  circleSize = circleSize - 10;
  ellipse( circleX, circleY, circleSize, circleSize );
  circleSize = circleSize - 10;
  ellipse( circleX, circleY, circleSize, circleSize );*/

}


function draw() {
  background ( 50, 60, 255);
  //bounce(); //call the function.
  //move();
  //move(); // getting faster.
  drawCircle ( width/2, height/2, 7, 200, 255 );
  drawCircle ( width/4, height/4, 10, 100, 300 );
  drawCircle ( 400, 300, 10, 230, 400 );
}

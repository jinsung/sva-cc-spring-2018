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

function draw() {
  background(200);
  // bounce();
  // move();
  drawCircle(width/2, height/2, 9, 170);
  drawCircle(width/4, height/4, 6, 130);
  drawCircle(width/5, height/1.6, 3, 100);

}

// function bounce() {
//   // check if it hit bound
//   if (circleX < 0 || circleX > width) {
//     speedX = speedX * -1;
//   }
//
//   if (circleY < 0 || circleY > height) {
//     speedY = speedY * -1;
//   }
// }
//
// function move() {
//   // move the circle
//   circleX = circleX + speedX;
//   circleY = circleY + speedY;
// }

function drawCircle(x, y, numbCircles, circleSize) {
  //Drawing of circle
  for (var i = 0; i < numbCircles; i = i + 1) {
    var iseg = i / (numbCircles - 1);
    var seg = circleSize / numbCircles;
    var inverseIndex = numbCircles - i - 1;
    circleSize = circleSize * (1 - iseg);
    fill(iseg * 255)
    ellipse(x, y, circleSize, circleSize);

  }


}

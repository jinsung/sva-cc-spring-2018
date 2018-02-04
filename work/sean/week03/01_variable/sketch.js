var circleY;
var circleX;

var circleXSpeed;
var circleYSpeed;

var myRandomNumX;
var myRandomNumY;

var clickSize;

function setup() {
  createCanvas(1427,785);
  background(230);

  //circleY = 0;
  //circleX = 0;
  circleXSpeed = 4.7;
  circleYSpeed = 7.6;

  clickSize = 70;
}

function draw () {

  ellipse (circleX, circleY, clickSize, clickSize);
  fill (myRandomNumX * 0.17, myRandomNumY * 0.32, 255, 20);
  noStroke ();

  myRandomNumX = random(width);
  myRandomNumY = random(height);

  circleY = circleY + circleYSpeed;
  circleX = circleX + circleXSpeed;

  if (circleX < 0 || circleX > width) {
    circleXSpeed= circleXSpeed * -1;
  }

  if (circleY < 0 || circleY > height) {
    circleYSpeed = circleYSpeed * -1;
  }

  // console.log("circleX is " + circleX);
}


function mouseClicked() {
  if (clickSize === clickSize) {
    clickSize = random(300);
  }
}

var circleY;
var circleX;
var myRandomNumX;
var myRandomNumY;
var myRandomNumR;


var circleXSpeed;
var circleYSpeed;

function setup() {
  createCanvas(500, 600);
  circleY = 250;
  circleX = 250;
  circleXSpeed = 1;
  circleYSpeed = 2;
}

function draw() {
  myRandomNumX = random(width);
  myRandomNumY = random(height);
  myRandomNumR=random(255);
  background(200);
  ellipse(circleXspeed, circleYSpeed, 20, 20);
  fill(myRandomNumX, 0, myRandomNumY);

  circleY = circleY + circleYSpeed;
  circleX = circleX + circleXSpeed;

  if (circleX < 0 || circleX > width ) {
    circleXSpeed = circleXSpeed * -1;
  }

  if (circleY < 0 || circleY > height ) {
    circleYSpeed = circleYSpeed * -1;
  }

}

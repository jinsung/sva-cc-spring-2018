var circleY; //declare variable
var circleX;
var myName;
var circleXSpeed;
var circleYSpeed;

function setup () {
  createCanvas(1000, 800);
  circleY = 250; //initialize variable
  circleX = 250;
  circleXSpeed = 5;
  circleYSpeed = 2.5;

  myName = "dongkyu";
}

function draw () {
  // this define what color of background
  background(200);
  ellipse(circleX, circleY, 20, 20); //use variable

/*
dqdkdqdkdqdk
if(circleX < 0) {

}
if(circleX > width)
*/
  circleY = circleY + circleYSpeed;
  circleX = circleX + circleXSpeed;

/*  if (circleX < 0) {
    circleXSpeed = circleXSpeed * -1;
  }

  if (circleX > 500) {
    circleXSpeed = circleXSpeed * -1;
  }

    if (circleY < 0) {
      circleYSpeed = circleYSpeed * -1;
    }

    if (circleY > 500) {
      circleYSpeed = circleYSpeed * -1;
    }
*/

  if (circleX < 0 || circleX > width) {
    circleXSpeed = circleXSpeed * -1;
  }

  if (circleY < 0 || circleY > height) {
    circleYSpeed = circleYSpeed * -1;
  }




  console.log("my name is " + myName);
  console.log("circleX is " + circleX);
  // console.log("circleX is " + circleX)
}

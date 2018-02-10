var circleX = 0;
var circleY = 20;
var speedX = 2;
var speedY = 1.5;

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(0);
  move();
  drawCircle();
  check();
}

function drawCircle(){
  ellipse(circleX, circleY, 20, 20);
  fill(255);
  noStroke();
}

function move(){
    circleX = circleX + speedX;
    circleY = circleY + speedY;
}

function check(){
  if(circleX > width || circleX < 0){
    speedX = speedX * - 1;
  } else if (circleY > height || circleY < 0){
    speedY = speedY * - 1;
  }
}

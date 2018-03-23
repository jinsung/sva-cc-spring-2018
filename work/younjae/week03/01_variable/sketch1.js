var circleY;
var circleX;
var myName
function setup() {
  createCanvas(500, 500);
  circleY = 250;
  circleX = 250;

  myName = "younjae";
}

function draw() {
  background(200);
  ellipse(circleX, circleY, 20, 20);

  circleY = circleY + 1;
  circleX = circleX + 0.5;

console.log("my name is " + circleX)
}

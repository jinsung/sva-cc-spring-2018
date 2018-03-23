var balls = [];
var chars = "Hello World!";
function setup() {
  createCanvas(500, 500);
  smooth();
  var numOfBalls = 5;
  textFont('COURIER');
  var nextCharXPos = 0;
  for (var i=0; i<chars.length; i++) {
    var size = 20;
    balls[i] = new MovingChar(chars[i], 100 + nextCharXPos, height/2, size, 0.07);
    nextCharXPos += size;
  }
}

function draw() {
  background(200);
  for (var i=0; i<balls.length; i++) {
    balls[i].move();
    balls[i].bounce(width, height);
    balls[i].draw();
  }
}

var balls = [];
var chars = "Hello World!";
function setup() {
  createCanvas(500, 500);
  smooth();
  var numOfBalls = 5;
  textFont('COURIER');
  for (var i=0; i<chars.length; i++) {
    var size = 10;
    balls[i] = new MovingChar(chars[i], 100 + i * size, height/2, size, 2.0 + random(1), 2.0 + random(1));
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

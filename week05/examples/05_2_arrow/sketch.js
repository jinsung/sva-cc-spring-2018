var backgroundColor = 200;
var isThrown = false;

var arrowX = 0;
var arrowY = 0;

var targetX = 100;
var targetY = 150;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(backgroundColor);

  drawTarget(targetX, targetY, 5, 80);

  locateArrow();

  var dx = arrowX - targetX;
  var dy = arrowY - targetY;
  var angle = Math.atan2(dy, dx);

  push();
  translate(arrowX, arrowY);
  rotate(angle);
  drawArrow();
  pop();
}

function mousePressed () {
  throwArrow();
}

function drawTarget(x, y, numOfCircles, targetSize, targetHue) {
  stroke (0);
  for (var i=numOfCircles; i>0; i--) {
    var step = i/numOfCircles; // range from 1 to 0.
    fill(step*255);
    var size = targetSize * step;
    ellipse(x, y, size, size );
  }
}

function locateArrow () {
  if (isThrown) {
    var diffX = targetX - arrowX;
    var diffY = targetY - arrowY;
    arrowX = arrowX + diffX * 0.1;
    arrowY = arrowY + diffY * 0.1;
  } else {
    arrowX = mouseX;
    arrowY = mouseY;
  }
}

function drawArrow() {
  var length = 60;
  triangle(0, 0, 10, 3, 10, -3);
  line(0, 0, length, 0 );

  // draw feathers
  var featherPos = 0.7;
  var featherSize = 5;
  var numOfFeathers = 4;
  for (var i = 0; i < numOfFeathers; i++) {
    drawFeather(length * featherPos, featherSize);
    featherPos += 0.1;
  }
}

function drawFeather(pos, size) {
  line (pos, 0, pos + size, size);
  line (pos, 0, pos + size, -size);
}

function throwArrow() {
  isThrown = !isThrown;
}

function getDistance(x1, y1, x2, y2) {
  var dx = x1 - x2;
  var dy = y1 - y2;
  var result = Math.sqrt(dx*dx + dy*dy);
  return result;
}

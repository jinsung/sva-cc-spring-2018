var points;
var targetPoints;
var isCircle;

function setup() {
  createCanvas(500, 500);
  points = [];
  targetPoints = [];
  for (var i=0; i < 100; i++) {
    points.push(createVector(0,0));
    targetPoints.push(createVector(0,0));
  }
  isCircle = true;
}

function draw() {
  background(0);
  var numOfPoints = 100;
  var sizeOfCircle = 100;
  stroke(255);
  var millisecond = Date.now();
  for (var i=0; i < numOfPoints; i++) {
    var segment = i/(numOfPoints-1);
    var radian = (Math.PI * 2) * segment - Math.PI/2;
    if (isCircle){

      var xPos = Math.cos(radian) * sizeOfCircle + width/2;
      var yPos = Math.sin(radian) * sizeOfCircle + height/2;
      var noiseMult = 0.05;
      var noiseValue = noise(xPos * noiseMult, yPos * noiseMult, millisecond * 0.001);
      noiseValue *= 10;
      var point = createVector(xPos + noiseValue, yPos + noiseValue);
    } else {
      var lineLength = Math.PI * sizeOfCircle;
      var xPos = width/2 + ((1-segment) * lineLength) - lineLength/2;
      var yPos = height/2;
      var point = createVector(xPos, yPos);
    }
    targetPoints[i] = point;
    points[i] = p5.Vector.lerp(points[i], targetPoints[i], 0.1);
    if (i > 0) {
      var prevPoint = points[i-1];
      var currentPoint = points[i];
      line(prevPoint.x, prevPoint.y, currentPoint.x, currentPoint.y);
    }
  }
}


function mousePressed(){
  isCircle = !isCircle;

}

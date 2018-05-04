/*
  Date: 13 April 2018
  Description: Creates circle using cos and sin

*/
var points;
var targetPoints;
var isCircle;

function setup() {
  createCanvas(500, 500);
  //store points in array
  points = [];
  targetPoints = [];
  for (var i = 0; i < 100; i++){
    points.push(createVector(0, 0));
    targetPoints.push(createVector(0, 0));
  }

  isCircle = true;
}

function draw() {
  background(0);
  var numOfPoints = 100;
  var sizeOfCircle = 80;
  stroke(255);
  var millisecond = Date.now();
  for (var i = 0; i < numOfPoints; i++){
    //i = 10. therefore seg = 0, 0.1, 0.2, ..., 0.9
    var segment = i/(numOfPoints-1);
    //radian goes from 0 to 2pi
    var radian = (Math.PI * 2) * segment - Math.PI/2;;
    if (isCircle){
      //gives each point of the circle in relation to size of circle
      //in the center of canvas
      var xPos = Math.cos(radian) * sizeOfCircle + width/2;
      var yPos = Math.sin(radian) * sizeOfCircle + height/2;
      //kenperlin noise gradually changes
      var noiseMult = 0.05;
      var noiseValue = noise(xPos * noiseMult, yPos * noiseMult, millisecond * 0.001);
      noiseValue *= 15;
      var point = createVector(xPos+noiseValue, yPos+noiseValue);
    } else{
      //else becomes the line when mousePressed
      var lineLength = Math.PI * 2 * sizeOfCircle;
      var xPos = width/2 + ((1-segment) * lineLength) - (lineLength/2);
      var yPos = height/2;
      var point = createVector(xPos, yPos);
    }

    targetPoints[i] = point;
    //interpolation on the targetLine
    //changes every ten percent
    points[i] = p5.Vector.lerp(points[i], targetPoints[i], 0.1);

    if(i > 0){
      // ex. i = 0
      var prevPoint = points[i-1];
      // ex. i = 1
      var currPoint = points[i];
      line(prevPoint.x, prevPoint.y, currPoint.x, currPoint.y);
    }
  }
}

function mousePressed(){
  //!isCircle means notisCircle, false
  isCircle = !isCircle;

}

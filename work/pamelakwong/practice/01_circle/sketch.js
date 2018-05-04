function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(0);
  var numOfPoints = 50;
  var sizeOfCircle = 100;
  for (var i = 0; i < numOfPoints; i++){
    //i = 10. therefore seg = 0, 0.1, 0.2, ..., 0.9
    var segment = i/numOfPoints;
    //radian goes from 0 to 2pi
    var radian = (Math.PI * 2) * segment;
    //gives each point of the circle in relation to size of circle
    //in the center of canvas
    var xPos = Math.cos(radian) * sizeOfCircle + width/2;
    var yPos = Math.sin(radian) * sizeOfCircle + height/2;

    ellipse(xPos, yPos, 10, 10);
  }
}

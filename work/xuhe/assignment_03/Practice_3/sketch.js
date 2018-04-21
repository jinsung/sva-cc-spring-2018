var points;

function setup(){

  createCanvas(500,500);
  points=[];

  angleMode(DEGREES);
  seconds =0;
  hours=0;
  minutes=0;
}

function draw(){
  background(0,mouseX,mouseY);
  updateClock();

  //translate(width/2,height/2);
  //var hoursAngle=map(hours,0,12,0,360)-90;
  //var minutesAngle= map(minutes,0,60,0,360)-90;
  //var secondsAngle= map(seconds,0,60,0,360)-90;

  var sizeOfCircle = 100;
  var numOfPoints = 10;
  strokeWeight(mouseX);
  stroke(255,mouseX*0.4);

for(var i=0;i<numOfPoints;i++){
  var segment = i/(numOfPoints-1);
  var radian = (Math.PI*2)*segment;
  var xPos= Math.cos(radian)*sizeOfCircle + width/2;
  var yPos= Math.sin(radian)*sizeOfCircle+height/2;

  // have a question here!
  var point = createVector(xPos,yPos);
  // have a question here!
  points.push(point);
  if(i>0){
    var prePoint = points[i-1];
    var currentPoint = points[i];
    line(prePoint.x,prePoint.y,currentPoint.x,currentPoint.y);
  }
 }
}


function updateClock(){
  seconds=second();
  hours=hour();

  minutes=minute();

}

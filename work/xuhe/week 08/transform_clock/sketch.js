
function setup(){
  createCanvas(500,500);
  angleMode(DEGREES);
  seconds =0;
  hours=0;
  minutes=0;

}

function draw(){
  background(0,100,255);
  updateClock();


  var hoursAngle=map(hours,0,12,0,360)-90;
  var minutesAngle= map(minutes,0,60,0,360)-90;
  var secondsAngle= map(seconds,0,60,0,360)-90;

  translate(width/2,height/2);
  push();
  noStroke();
  ellipse(0,0,width*1,height*1);
  pop();

  push();
  strokeWeight(8);
  stroke(0,255,255);
  rotate(hoursAngle);
  line(0,0,width/2*0.4,0);
  pop();


  push();
  rotate(minutesAngle);
  strokeWeight(3.3);
  stroke(0,0,255);
  line(0,0,width/2*0.6,0);
  pop();


  push();
  strokeWeight(2);
  stroke(200);
  rotate(secondsAngle);
  line(0,0,width/2*0.8,0);
  pop();

}

function updateClock(){
  seconds=second();
  hours=hour();

  minutes=minute();

}


function setup(){
  createCanvas(500,500);
  angleMode(DEGREES);
  seconds =0;
  hours=0;
  minutes=0;

}

function draw(){
  background(0);
  updateClock();
  translate(width/2,height/2);


  let secondEllipse = 1;


// dots
  push();
  var outlinedots= map(secondEllipse, 0, 12, 0, 360);

  for (secondEllipse=0; secondEllipse<360; secondEllipse = secondEllipse + 1) {
    rotate(outlinedots);
    noStroke();
    fill(255);
    ellipse(0,200,4,4);
  }
  pop();


  var hoursAngle=map(hours,0,12,0,360)-90;
  var minutesAngle= map(minutes,0,60,0,360)-90;
  var secondsAngle= map(seconds,0,60,0,360)-90;


  push();
  noStroke();
  fill(0,20,mouseY,50);
  ellipse(0,0,400,400);
  pop();

  push();
  noStroke();
  fill(0,20,200,50);
  ellipse(0,0,width/2*0.8,width/2*0.8);
  pop();

// length of hands
  push();
  strokeWeight(3);
  stroke(0,255,255);
  rotate(hoursAngle);
  line(0,0,width/2*0.4,0);
  pop();


  push();
  rotate(minutesAngle);
  strokeWeight(2);
  stroke(0,0,255);
  line(0,0,width/2*0.6,0);
  pop();



  push();
  strokeWeight(1);
  stroke(200);
  rotate(secondsAngle);
  line(0,0,width/2*0.8,0);
  pop();

  stroke(255);
  strokeWeight(10);
  point(0,0);




}

push();
var outlineEllipse = map(secondEllipse, 0, 60, 0, 360);

for (secondEllipse = 0; secondEllipse < 360; secondEllipse = secondEllipse + 1) {
  rotate(outlineEllipse);
  fill(255);
  ellipse(0,140,6,6);
}
pop();



function updateClock(){
  seconds=second();
  hours=hour();

  minutes=minute();

}

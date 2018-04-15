var strokeColor1;
var strokeColor2;
var strokeColor3;


function setup(){
  createCanvas(600,600);
  angleMode(DEGREES);
}

function draw(){
  background(0);
  translate(300,300);
  rotate(-90);

  let hr=hour();
  let mn=minute();
  let sc=second();

  // mapping the range should from 0 to 255
  strokeColor1= map(sc,0,60,0,255);
  strokeColor2= map(mn,0,60,0,360);
  strokeColor3= map(hr % 12,0,12,0,360);




 strokeWeight(14);
 stroke(251,88,strokeColor1,stokeColor1);
 noFill();
 //fill(250);
 let secondAngle = map(sc,0,60,0,360);
 arc(0,0,320,320,0,secondAngle);

 stroke(82,51,247);
 let minuteAngle = map(mn,0,60,0,360);
 arc(0,0,280,280,0,minuteAngle);

 stroke(163,237,31);
 let hourAngle = map(hr % 12,0,12,0,360);
 arc(0,0,240,240,0,hourAngle);

 push();
 rotate(secondAngle);
 strokeWeight(10);
 stroke(251,88,strokeColor1);
 line(0,0,70,0);
 pop();

 push();
 rotate(minuteAngle);
 strokeWeight(10);
 stroke(82,51,247);
 line(0,0,60,0);
 pop();

 push();
 rotate(hourAngle);
 strokeWeight(10);
 stroke(163,237,31);
 line(0,0,40,0);
 pop();

 stroke(255);
 strokeWeight(10);
 point(0,0);

  //fill(255);
  //noStroke();
  //text(hr+ ':' + mn + ":" + sc,10,200);

}

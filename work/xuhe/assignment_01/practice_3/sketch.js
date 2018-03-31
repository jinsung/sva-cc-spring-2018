var circleX=300;
var speed=1;
var trans=50;
var circleSize=100;
var r=0;




function setup(){
  createCanvas(600,400);
}

function draw(){

  background(0);



  trans=random(0,250);
  stroke(0,0,0,trans);
  strokeWeight(0);
  noFill();
  ellipse(mouseX,mouseY,50,50);

  if (mouseY>50&&mouseY<150){
    stroke(0);
    strokeWeight(2);
    fill(250,0,0);
  }

  ellipse(300,100,circleSize,circleSize);

  if (mouseY>150&&mouseY<250){
    stroke(0);
    strokeWeight(2);
    fill(0,0,250);

  }
  ellipse(circleX,200,circleSize,100);


  if (mouseY>250&&mouseY<350){
    stroke(0);
    strokeWeight(2);
    fill(0,250,0);

  }
  ellipse(circleX,300,circleSize,100);
    //circleX=circleX+speed*;


  if(circleX<50||circleX>550){
    speed=speed*-2;
  }
  if(circleX<50||circleX>550){
    circleSize=circleSize+1;
  }
}

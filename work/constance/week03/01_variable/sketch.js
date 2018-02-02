var circleY=250;
var circleX=250;
var circleXSpeed=5;
var circleYSpeed=2.5;


function setup(){

createCanvas(500,500);
//background(255,0,255);




}

function draw(){
  background(255,0,127);



  stroke(200,30,255);
  fill(255,177,20);
  ellipse(circleX,circleY,60,60);


  circleX=circleX+circleXSpeed;
  circleY=circleY+circleYSpeed;

  if(circleX<0||circleX>width){
    circleXSpeed=circleXSpeed*-1;
  }

  if(circleY<0||circleY>height){
  circleYSpeed=circleYSpeed*-1
  }


  }

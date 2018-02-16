var circleY;
var circleX;
var circleXspeed;
var circleYspeed;

function setup(){
  createCanvas(500,500);
  circleY=250;
  circleX=250;
  circleXspeed=60;
  circleYspeed=35;

}

function draw(){
  background(200);
  ellipse(circleX,circleY,100,100);//좌표,크기
  noStroke();
  //storke(,,,);
  fill(circleX,circleY,150);

  //CircleY=cirlcle+1:
  circleX=circleX+circleXspeed;
  circleY=circleY+circleYspeed;


  if (circleX<0||circleX>width){
    circleXspeed=circleXspeed *-1;
  }

  if(circleY<0||circleY>height){
    circleYspeed=circleYspeed *-1;
  }

  }

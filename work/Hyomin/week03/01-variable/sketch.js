var cirY;
var cirX;
var cirXspeed;
var cirYspeed;

function setup(){
  createCanvas(500,500);
  cirY=250;
  cirX=250;
  cirXspeed=5;
  cirYspeed=10;

}

function draw(){
  background(200);
  ellipse(cirX,cirY,cirX,ciry);//좌표,크기
  noStroke();
  //storke(,,,);
  fill(cirX,cirY,150);

  //CircleY=cirlcle+1:
  cirX=cirX+cirXspeed;
  cirY=cirY+cirYspeed;


  if (cirX<0||cirX>width){
    cirXspeed=cirXspeed *-1;
  }

  if(cirY<0||cirY>height){
    cirYspeed=cirYspeed *-1;
  }

  }
//

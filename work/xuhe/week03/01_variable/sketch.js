var circleY;
var circleX;
var circleXSpeed;
var circleYSpeed;


function setup(){
 createCanvas(500,700);
 circleY=250;
 circleX=250;
 circleXSpeed=5;
 circleYSpeed=10;

}

function draw(){
 background(0);
 ellipse(circleX,circleY,20,20);

circleY=circleY+circleYSpeed;
circleX=circleX+circleXSpeed;


 if (circleX<0 || circleX>width){
  circleXSpeed=circleXSpeed*-1;
 }

 if(circleY<0 || circleY>height){
  circleYSpeed=circleYSpeed*-1;
}





//console.log("circleX is "+ circleX);

 }

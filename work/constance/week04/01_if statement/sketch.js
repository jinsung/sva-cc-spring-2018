var circleX=0

function setup(){
  createCanvas(500,500);

}

function draw(){
  background(90,200,112);

  fill(255,255,255);


if (circleX-5<mouseX && circleX+5>mouseX){
  fill(255,50,190);

}else if(circleX<mouseX){
  circleX=circleX+1;
}else{
  circleX=circleX-1;
}


ellipse(circleX,height/2,10,10);
}

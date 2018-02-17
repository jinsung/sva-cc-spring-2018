var circleX=0;
    circleY=0;
function setup () {
  createCanvas(500, 500);

}

function draw(){
  background(200);
  fill(255,255,255);
//=&&and ||=or
  if(circleX-5<mouseX && circleX+5>mouseX){
    fill(255,0,0);
  } else if(circleX < mouseX){
    circleX= circleX+1;
  } else {
    circleX= circleX-1;
  } if(circleY < mouseY);{
    circleY= circleY+1;
  } //else {
    //circleY= circleY-1;
  //}??
  ellipse(circleX,circleY,mouseY,mouseY);
}

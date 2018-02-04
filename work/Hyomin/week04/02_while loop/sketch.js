var circleX=0;
function setup () {
  createCanvas(500, 500);

}

function draw(){
  background(200);

  fill(255);
  circleX=250; //1.initialize

  while(circleX<width){//2.compare
    circleX=circleX+10;//3.chenge value
    ellipse(circleX,height/2,10,10);
  }















}

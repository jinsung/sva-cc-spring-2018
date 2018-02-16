
function setup () {
  createCanvas(500, 500);

}

function draw(){
  background(200);

  fill(255);
  circleX=0; //1.initialize

  while(circleX<width){//2.compare
    circleX=circleX+5;//3.chenge value
    ellipse(circleX,height/2,10,10);
  }















}

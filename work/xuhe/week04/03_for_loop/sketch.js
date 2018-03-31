
function setup() {
  createCanvas(500,500);
  circle=0;
}

function draw() {
  background(0);

  fill(255);

  for(var circleX;circleX=0;circleX<width;circleX=circleX+20){
  ellipse(circleX,height/2,10,10);
  }



}

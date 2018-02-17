var angle=0;
function setup(){

  createCanvas(500,500);
// rotate around the register point(0,0)
  angleMode(DEGREES);
  rectMode(CENTER);


}

function draw(){
  background(0);
  translate(100,100);
  rotate(angle);
  rect(0,0,100,100);
  angle=angle+1;

}

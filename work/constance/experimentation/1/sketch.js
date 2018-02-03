var circle={
  d:8
}

function setup(){
  createCanvas(1000,750);

}
function draw(){
  if(mouseIsPressed){

    fill(250,13,random(255));
    noStroke(0);

  } else{
    fill(255);
    stroke(0);
  }

circle.d=circle.d+1
  ellipse(mouseX,mouseY,circle.d,circle.d);

}

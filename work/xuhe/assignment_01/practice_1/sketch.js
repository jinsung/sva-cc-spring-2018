
function setup(){
  createCanvas(500,500);
  background(0,0,255);
}


function draw(){

  noStroke();
  fill(mouseX,mouseY,0,200);
  ellipse(mouseX,mouseY,20,20);

  fill(mouseX,0,100,50);
  rect(0,0,100,500);

  fill(mouseX,0,200,40);
  rect(0,0,200,500);

  fill(mouseX,0,150,30);
  rect(0,0,300,500);

  fill(mouseX,0,100,20);
  rect(0,0,400,500);

  fill(mouseX,0,50,10);
  rect(0,0,500,500);
}

function mousePressed(){
  background(0,0,255);
}

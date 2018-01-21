function setup(){
  createCanvas(500,500);
background(200,30,150);

}

function draw(){

noStroke();
fill(mouseX*0.5);
ellipse(250,250,mouseX,mouseY);

}

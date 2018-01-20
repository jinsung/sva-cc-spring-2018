function setup(){
  createCanvas(500, 500);
  background(0);

}

function draw(){
  noStroke();
  fill(0, 255 - mouseX, 255 - mouseY);
  ellipse(250, 250, mouseX, mouseY);

}

function setup() {
  background (200);
  createCanvas(500,500) ;


}


function draw() {
noStroke();
fill(mouseX * 0.5);
fill(205,0,0)
  ellipse(250, 250, mouseX, mouseY);


}

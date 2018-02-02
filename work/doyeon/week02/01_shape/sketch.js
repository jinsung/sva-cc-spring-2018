function setup(){
  createCanvas(500,500);
  background(200);
}

function draw() {
  noStroke();
  fill(mouseX / 2);
  ellipse (250, 250, mouseX, mouseY);

}

function setup() {
  createCanvas(500,500);
  background(200)

}

function draw() {
  noStroke();

  fill(mouseX,0,0);
  ellipse(mouseX, 250, mouseX, mouseY)
}

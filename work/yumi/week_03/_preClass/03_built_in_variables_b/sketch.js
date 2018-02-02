//built in variables

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);

}

function draw() {
  stroke(mouseX, mouseY, 255, 20);
  noFill();
  ellipse(width /2, height / 2, mouseX, mouseY);
}

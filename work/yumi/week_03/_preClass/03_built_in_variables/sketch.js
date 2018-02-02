//built in variables

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);

}

function draw() {
  //noStroke();
  fill(mouseX, 5);
  ellipse(width /2, height / 2, mouseX, mouseY);

}

//built in variables

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);

}

function draw() {
  stroke(mouseX, mouseY, 255, 20);
  fill(random(100, 110), 10);
  ellipse(mouseX, mouseY, mouseX - 50, mouseY - 50);
}

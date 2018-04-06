function setup() {
  createCanvas(500,500);
}

function draw() {
  background (100);
  fill(0, 0, mouseX * 0.7);

  ellipse(250, 250, mouseX, mouseY);


  if (mouseIsPressed) {
    fill(0);

  } else {
    fill(255);

  }
  ellipse(mouseX, mouseY, 80, 80);

}

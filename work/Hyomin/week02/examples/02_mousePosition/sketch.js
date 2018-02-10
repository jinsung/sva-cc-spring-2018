function setup () {
  createCanvas(500, 500);
  console.log("setup");
  background(230);
  fill(200);
  ellipse(250, 250, 100, 100);
}

function draw() {
  //background(100);
  noStroke();
  fill(mouseX / 2);
  ellipse(250, 250, mouseX, mouseY);
}

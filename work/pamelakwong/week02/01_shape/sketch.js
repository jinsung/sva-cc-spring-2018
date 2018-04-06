function setup() {
  createCanvas(500,500);
  background(200);



  //explore the other parameters in Mode

}

function draw() {
  noStroke();
  fill(0, 0, mouseX * 0.7);
  ellipse(250, 250, mouseX, mouseY);

  ellipse(mouseY, mouseX, 50, 50);
  ellipse(mouseY, mouseY, 80, 80);
  rect(mouseX, mouseY, 90, 90);


}

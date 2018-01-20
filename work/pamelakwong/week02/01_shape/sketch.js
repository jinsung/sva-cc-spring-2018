function setup() {
  createCanvas(500,500);
  background(200);

  // fill(255,0,0);
  // ellipseMode(CORNER);
  // ellipse(250,250,100,100);
  //
  //
  // fill(0,255,0);
  // rectMode(CENTER);
  // rect(250,250,100,100);

  //explore the other parameters in Mode

}

function draw() {
  noStroke();
  fill(mouseX * 0.7);
//  ellipse(250, 250, mouseX, mouseY);

  ellipse(mouseY, mouseX, 50, 50);
  ellipse(mouseY, mouseY, 80, 80);
//  rect(mouseX, mouseY, 90, 90);


}

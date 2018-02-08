
var myRandomNumX;
var myRandomNumY;

var clickSize;

function setup() {
  createCanvas(1427,785);
  background(230);

  clickSize = random(300);
}


function draw () {
  fill (myRandomNumX * 0.17, myRandomNumY * 0.32, 255, 100);
  ellipse (mouseX, mouseY, clickSize, clickSize);
  noStroke ();
  myRandomNumX = random(width);
  myRandomNumY = random(height);
  fill(230);
  rect (50, 40, 600, 150);
  clickSize = random(300);
  fill(0);

  textSize(50);
  text('Current Brush Size', 100, 100);
  text(clickSize, 100, 170);

}

function mouseClicked() {
  if (clickSize === clickSize) {


  }
}

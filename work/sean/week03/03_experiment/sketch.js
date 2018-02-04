
var myRandomNumX;
var myRandomNumY;

var clickSize;

function setup() {
  createCanvas(1427,785);
  background(230);

  clickSize = random(300);
}


function draw () {
  fill (myRandomNumX * 0.17, myRandomNumY * 0.32, 255, 10);
  ellipse (mouseX, mouseY, clickSize, clickSize);
  noStroke ();
  myRandomNumX = random(width);
  myRandomNumY = random(height);
}

function mouseClicked() {
  if (clickSize === clickSize) {
    clickSize = random(300);
    textSize(50);
    text('click to change brush size', 500, 500);
    text('brush size:', 500, 570);
    text(clickSize, 750, 570);
    fill(100,100,100);

  }
}

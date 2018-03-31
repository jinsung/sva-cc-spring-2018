

var myRandomNumX;
var myRandomNumY;

var clickSize;

function setup() {
  createCanvas(1427,785);
  background(255);
  clickSize = random(30);
}


function draw () {
  //fill (myRandomNumX * 0.17, myRandomNumY * 0.32, 255,10);
  //fill (255)
  noFill();
  ellipse (mouseX, mouseY, clickSize, clickSize);
  //noStroke ();
  myRandomNumX = random(width);
  myRandomNumY = random(height);

  fill(255);
  rect (80, 74, 300, 40);
  fill(0);

  textSize(20);
  text('Click to Change Ellipse Size', 100, 100);
  console.log("Ellipse")
}

function mouseClicked() {
  if (clickSize === clickSize) {
    clickSize = random(300);
  }
  console.log("Mouse Click")
}

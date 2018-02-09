var n = 0;
var c = 5;

function setup() {
  createCanvas(800, 600);
  background(0);
}

function draw() {
  var a = n * 140;
  //var a = n * 137.5;
  //var a = n * 100;
  var r = c * sqrt(n);

  var x = r * cos(a) + width / 2;
  var y = r * sin(a) + height / 2;
  fill(200, 0, 130, 80);
  ellipse(x, y, 40, 40);

  n++;

  textSize(32);
    text("BLACK PINK",
      mouseX, mouseY, 200, 200);
    if (mouseIsPressed) {
      noFill();
      stroke(0, 255, 0);
      rect(mouseX, mouseY, 200, 200);
    }

}

//function preload() {
  //font = loadFont('Ubuntu-Bold.ttf')

//}

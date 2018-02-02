var rectWidth;
var rectHeight;
var counter;

function setup() {
  createCanvas(500, 500);
  rectWidth = 15;
  rectHeight = 4;
  counter = 0;
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(200);
  fill(0);
  var mult = Math.PI;
  for (var y = rectWidth/2; y < width; y+=rectWidth) {
    if (y > width * 0.33) {
      mult = Math.PI * 0.33;
    }
    if (y > width * 0.66) {
      mult = Math.PI * 0.66;
    }
    for (var x = rectHeight/2; x < height; x+=rectHeight) {
      push();
      var n = noise(x*0.02, y*0.0038, counter*0.01)*2.0;
      translate(x, y);
      rotate(mult*n);
      rect(0, 0, rectWidth, rectHeight);
      pop();
    }
  }
  counter++;
}

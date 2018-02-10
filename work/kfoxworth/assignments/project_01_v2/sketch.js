// var xoff1 = 0;
// var xoff2 = 10000;


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}


function draw() {
  background(51);
  stroke(255);
  noFill();
  beginShape();
  for (var x = 0; x < width; x++) {
    stroke(0, 255, 0);
    vertex(x, random(height));


  }
  endShape();

  //noLoop();


  //var x = random(width);

  // var x = map(noise(xoff1), 0, 1, 0, width);
  // var y = map(noise(xoff2), 0, 1, 0, height);

  // xoff1 += 0.01;
  // xoff2 += 0.01;


  // ellipse(x, y, 24, 24);
}

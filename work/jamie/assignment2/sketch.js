function setup() {
  createCanvas(720, 400);
}

function draw() {
  background(0);

  push();
  translate(width*0.6, height*1.0);
  rotate(frameCount / 200.0);
  star(0, 0, 6, 80, 4);
  pop();

  push();
  translate(width*0.5, height*0.5);
  rotate(frameCount / 70.0);
  star(0, 0, 100, 200, 50);
  pop();

  push();
  translate(width*0.9, height*0.3);
  rotate(frameCount / -100.0);
  star(0, 0, 30, 80, 6);
  pop();
}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/5.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

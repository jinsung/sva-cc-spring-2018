function setup() {
  createCanvas(720, 400);
  background(100);
  noStroke();
}

function draw() {
  background(100);
  from = color(100, 0, 0, 0.2 * 100);
  to = color(0, 0, 100, 0.2 * 100);
  c1 = lerpColor(from, to, .33);
  c2 = lerpColor(from, to, .88);
  for (var i = 0; i < 15; i++) {
    fill(from);
    quad(random(-40, 220), random(height),
         random(-40, 220), random(height),
         random(-40, 220), random(height),
        random(-40, 220), random(height));
    fill(c1);
    quad(random(140, 380), random(height),
         random(140, 380), random(height),
         random(140, 380), random(height),
         random(140, 380), random(height));
    fill(c2);
    quad(random(320, 580), random(height),
         random(320, 580), random(height),
         random(320, 580), random(height),
         random(320, 580), random(height));
    fill(to);
    quad(random(500, 760), random(height),
         random(500, 760), random(height),
         random(500, 760), random(height),
         random(500, 760), random(height));
  }
  frameRate(5);
}

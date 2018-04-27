var bird;

function setup() {
  createCanvas(1000, 1000);
  bird = loadImage("bird.jpg");
  background(0);

}

function draw() {
  x = random(width);
  y = random(height);
  color = bird.get(int(x), int(y));
  fill(color);
  ellipse(x, y, 16, 16);




}

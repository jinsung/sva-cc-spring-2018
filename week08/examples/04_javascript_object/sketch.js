var ball1;
var ball2;

function setup() {
  createCanvas(400, 400);

  ball1 = {
    x:100,
    y:100,
    size: 10
  }

  ball2 = {
    x:200,
    y:100,
    size: 20
  }
}

function draw() {
  background(100);
  ellipse(ball1.x, ball1.y, ball1.size, ball1.size);
  ellipse(ball2.x, ball2.y, ball2.size, ball2.size);
}

var ball1;

function setup() {
  createCanvas(500, 500);

  ball1 = {
    x: 100,
    y: 100,
    size: 10
  };
//json(javascrip object): how people are sending data
  ball2 = {
    x: 200,
    y: 200,
    size: 30
  };
}

function draw() {
  background(0);
  ball1.y = 300;
  fill(255);
  ellipse(ball1.x, ball1.y, ball1.size, ball1.size);
  ellipse(ball2.x, ball2.y, ball2.size, ball2.size);
}

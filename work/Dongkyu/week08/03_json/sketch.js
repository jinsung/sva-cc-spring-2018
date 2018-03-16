var ball1;

function setup() {
  createCanvas(500, 500);

  ball1 = {
    x: 100,
    y: 100,
    size: 10
  }; //this is json --- ball1 have those multiple values inside / class is blueprint
}


function draw() {
  background(200);

  ellipse(ball1.x, ball1.y, ball1.size, ball1.size);
}

var ball1;
var ball2;

function setup() {
  createCanvas(500, 500);
  ball1 = new Ball();
  ball2 = new Ball();
  ball1.setup(200, 300, 50, 2.0, 2.2);
  ball2.setup(400, 400, 100, 2.0, 2.2);
}

function draw() {
  background(200);
  ball1.move();
  ball1.display();
  ball1.bounce();

  ball2.move();
  ball2.display();
  ball2.bounce();

}

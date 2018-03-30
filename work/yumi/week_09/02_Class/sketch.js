var ball1;
var ball2;

function setup() {
  createCanvas(500, 500);
  ball1 = new Ball();
  ball1.setup(200, 300, 30, 2.0, 2.2, color(random(0, 100), 0, 255));

  ball2 = new Ball();
  ball2.setup(100, 100, 20, 4.0, 2.2, color(255, 0, 100));
}

function draw() {
  background(0);
  ball1.move();
  ball1.display();
  ball1.bounce();

  ball2.move();
  ball2.display();
  ball2.bounce();

}

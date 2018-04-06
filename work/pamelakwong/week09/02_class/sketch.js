var ball;
var ball2;
var ball3;

function setup() {
  createCanvas(500, 500);
  ball = new Ball();
  ball.setup(200, 100, 80, 2.0, 2.2);

  ball2 = new Ball();
  ball2.setup(100, 200, 40, 2.0, 3.2);

  ball3 = new Ball();
  ball3.setup(100, 400, 80, 3.0, 3.0);
}


function draw() {
   background(200);

   ball.move();
   ball.display();
   ball.bounce();

   ball2.move();
   ball2.display();
   ball2.bounce();

   ball3.move();
   ball3.display();
   ball3.bounce();
}

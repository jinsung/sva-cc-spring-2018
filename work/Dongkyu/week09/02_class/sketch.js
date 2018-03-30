var ball;
var ball2;

function setup() {
  createCanvas(500, 500);

  ball = new Ball(); // class 를 만들땐 대문자로 시작함
  ball2 = new Ball();
  ball.setup(200, 300, 50, 2.0, 2.2);
  ball2.setup(100, 150, 20, 5.0, 3.4);

}


function draw() {
  background(200);


  ball.move();
  ball.display();
  ball.bounce();

  ball2.move();
  ball2.display();
  ball2.bounce();
}

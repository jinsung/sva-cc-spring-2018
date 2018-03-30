var balls = [];
//var myArray = [];

function setup() {
  createCanvas(500, 500);
  //create a ball.
  for(var i = 0; i < 200; i ++){
    balls[i] = new BouncingBall(random(width/2),
    random(height/2), 25, random(1, 2), random(2, 3), color(0, i, 255, 150));
  }
}

function draw() {
  background(0);
  for(i = 0; i < 200; i ++){
    balls[i].display();
    balls[i].move();
    balls[i].bounce();
  }
}

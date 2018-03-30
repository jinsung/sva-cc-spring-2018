var balls = [];

function setup() {
  createCanvas(500, 500);
  //create a ball
  for (var i = 0; i < 200; i++){
    balls[i] = new BouncingBall (random(width), random(height), random(5, 40), random(-1, 6), random(-1, 1), color(200,100));
  }

}


function draw() {
  background(0);

  //call function move and display to draw a ball object
  for (var i = 0; i < 200; i++) {
    balls[i].move();
    balls[i].display();
    balls[i].bounce();
  }
}

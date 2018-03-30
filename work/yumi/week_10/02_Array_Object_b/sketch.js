var balls = [];
//var myArray = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  //create a ball.
  for(var i = 0; i < 200; i ++){
    var ii = i * 0.02;
    balls[i] = new BouncingBall(ii,ii, 20, ii, ii + random(0.3, 0.5), color(0, i, 255, 150));
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

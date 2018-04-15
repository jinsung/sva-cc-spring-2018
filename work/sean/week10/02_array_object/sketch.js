var ball = [];

function setup() {
  createCanvas(500, 500);
  for (var i = 0; i < 400; i++){
    var ii = i * 0.01;
    ball[i] = new BouncingBall (
      random(width),
      random(height),
      50,
      ii,
      ii,
      random(255));
  }
}

function draw() {
  background(200);


  for (var i = 0; i < 200; i++){
    ball[i].move();
    ball[i].display();
    ball[i].bounce();
  }
}

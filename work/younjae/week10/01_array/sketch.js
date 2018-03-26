var balls = [];

function setup() {
  createCanvas(500, 500);
  for (var i = 0; i < 200; i++) {
    var ii = i * 0.01;
    balls[i] = new BouncingBall(ii,
                                ii,
                                20,
                                ii,
                                ii * + 0.1,
                                i);

  }
}

  function draw() {
    background(200);

    for (var i = 0; i < 200; i++) {

    balls[i].move();
    balls[i].display();
    balls[i].bounce();

  }
}

var balls = [];

function setup() {
  createCanvas(500, 800);

  for (var i = 0; i < 200; i++){
    var xPosition = random(width) * mouseX;
    var yPosition = random(height) * mouseY;
    
    balls[i] = new BouncingBall(xPosition, yPosition, 50, random(-5,-1), random(-1, 1), random(255));

  }
}


function draw() {
  background(255);

  for(var i = 0; i < 200; i++){
    balls[i].move();
    balls[i].display();
    balls[i].bounce();
  }

}

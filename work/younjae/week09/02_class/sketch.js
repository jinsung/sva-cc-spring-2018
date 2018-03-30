var ball;
var ball2;

function setup() {
  createCanvas(500, 500);
  ball = new Ball();
  ball.setup (200, 300, 50, 2.0, 2.2);

  ball2 = new Ball();
  ball2.setup (100, 200, 80, 3.0, 2.2);
//ball.setup (200, 300, size, xspeed, yspeed);
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

function Ball() {
  this.setup = function (x, y, size, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }
  this.move = function () {
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;

  }
  this.bounce = function () {
    if ( this.x < 0 || this.x > width ) {
      this.xSpeed *= -1;
    } else if (this.y < 0 || this.y > height ) {
      this.ySpeed *= -1;
    }


  }

  this.display = function () {
    ellipse(this.x, this.y, this.size, this.size);
  }
}

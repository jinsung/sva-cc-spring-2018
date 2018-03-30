var ball;
var ball2;

function setup() {
  createCanvas(500, 500);
  ball = {
    x: 10,
    y: 20,
    xSpeed: 2.0,
    ySpeed: 2.2,
    size: 10,
    move: function() {
      this.x = this.x + this.xSpeed;
      this.y = this.y + this.ySpeed;
    },
    bounce: function () {
      if (this.x > width || this.x < 0) {
        this.xSpeed = this.xSpeed * -1;
      } else if (this.y > height || this.y < 0) {
        this.ySpeed = this.ySpeed * -1;
      }
    },
    display: function () {
      ellipse(this.x, this.y, this.size, this.size);
    }
  };

  ball2 = {
    x: 20,
    y: 20,
    xSpeed: 2.2,
    ySpeed: 2.5,
    size: 40,
    move: function() {
      this.x = this.x + this.xSpeed;
      this.y = this.y + this.ySpeed;
    },
    bounce: function () {
      if (this.x > width || this.x < 0) {
        this.xSpeed = this.xSpeed * -1;
      } else if (this.y > height || this.y < 0) {
        this.ySpeed = this.ySpeed * -1;
      }
    },
    display: function () {
      ellipse(this.x, this.y, this.size, this.size);
    }
  };
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

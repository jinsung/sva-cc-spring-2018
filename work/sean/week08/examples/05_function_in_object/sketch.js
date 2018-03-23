var ball1;
var ball2;

function setup() {
  createCanvas(400, 400);

  ball1 = {
    x:100,
    y:100,
    size: 10,
    speedX: 2,
    speedY: 2.1,
    move: function() {
      this.x = this.x + this.speedX;
      this.y = this.y + this.speedY;
    },
    bounce: function () {
      if ( this.x < 0 || this.x > width ) {
        this.speedX *= -1;
      }
      if (this.y < 0 || this.y > height) {
        this.speedY *= -1;
      }
    },
    display: function() {
      ellipse(this.x, this.y, this.size, this.size);
    }
  }

  ball2 = {
    x:100,
    y:10,
    size: 10,
    speedX: 1.5,
    speedY: 2.1,
    move: function() {
      this.x = this.x + this.speedX;
      this.y = this.y + this.speedY;
    },
    bounce: function () {
      if ( this.x < 0 || this.x > width ) {
        this.speedX *= -1;
      }
      if (this.y < 0 || this.y > height) {
        this.speedY *= -1;
      }
    },
    display: function() {
      ellipse(this.x, this.y, this.size, this.size);
    }
  }

}

function draw() {
  background(100);
  ball1.move();
  ball1.bounce();
  ball1.display();

  ball2.move();
  ball2.bounce();
  ball2.display();
}

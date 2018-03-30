var ball;

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
    display: function () {
      ellipse(this.x, this.y, this.size, this.size);
    },
    bounce: function() {
      if ( this.x < 0 || this.x > width ) {
        this.xSpeed *= -1;
      } else if (this.y < 0 || this.y > height ) {
        this.ySpeed *= -1;
    }
   },
 };

}

function draw() {
  background(200);
  ball.move();
  ball.display();
  ball.bounce();

}

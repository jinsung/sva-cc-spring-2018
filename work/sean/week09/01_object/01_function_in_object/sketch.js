var ball;

function setup() {
  createCanvas(400, 400);
  ball = {
    x:10,
    y:20,
    xSpeed: 2,
    ySpeed: 2.2,
    size: 10,
    move: function(){
      this.x = this.x + this.xSpeed;
      this.y = this.y + this.ySpeed;
    },
    bounce: function(){
      if (this.x < 0 || this.x > width ) {
        this.xSpeed *= -1;
      }
      if (this.y < 0 || this.y > height ) {
        this.ySpeed *= -1;
      }
    },
    display: function(){
      ellipse(this.x, this.y, this.size, this.size);
    },
  }
}

function draw() {
  background(100);
  ball.move();
  ball.bounce();
  ball.display();
}

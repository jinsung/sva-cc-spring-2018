var ball;

function setup() {
  createCanvas(500, 500);
  ball = {
    x: 10,
    y: 20,
    xSpeed: 2.0,
    ySpeed: 2.2,
    size: 10,
    move: function(){
      this.x = this.x + this.xSpeed;
      this.y = this.y + this.ySpeed;
    },
    bounce: function(){
      if(this.x > width || this.x < 0){
          this.xSpeed = this.xSpeed *- 1;
      } else if (this.y > 500 || this.y < 0){
        this.ySpeed =  this.ySpeed *- 1;
      }
    },
    display: function(){
      ellipse(this.x, this.y, this.size, this.size);
    }
  }; //object
}

function draw() {
  background(0);
  ball.move();
  ball.display();
  ball.bounce();

}

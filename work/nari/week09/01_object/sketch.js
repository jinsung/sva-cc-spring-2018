var Ball;


function setup() {
  createCanvas(500, 500);

  //this is how you create an object
  ball= {
    x: 10,
    y: 20,
    xSpeed: 2.0,
    ySpeed: 2.2,
    size: 20,

    move: function (){
      this.x = this.x + this.xSpeed;
      this.y = this.y + this.ySpeed;
    },

    display: function (){
      //when inside the object, use 'this'
      ellipse(this.x, this.y, this.size, this.size);
    },

    bounce: function (){
      if (this.x > width || this.x < 0) {
        this.xSpeed = this.xSpeed * -1;
      } else if (this.y > height || this.y < 0) {
        this.ySpeed = this.ySpeed * -1;
      }
    }
  };
}

function draw() {
  background(0);

 //call on the object using . syntax
  ball.move();
  ball.display();
  ball.bounce();
}

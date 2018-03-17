var ball;
var

function setup(){
  createCanvas(500,500);
  ball = {
    x:10,
    y:20,
    xSpeed: 2.0,
    ySpeed: 2.2,
    size:10,
    move: function(){
      this.x=this.x+this.xSpeed;
      this.y=this.y+this.ySpeed;
    },

    bounce: function(){
      if(this.x<0||this.x>width){
        this.xSpeed=this.xSpeed*-1;
      };
      if(this.y<0||this.y>height){
        this.ySpeed=this.ySpeed*-1;
      };
    },
    // don;t forget to put comma after bracket

    display: function(){
      ellipse(this.x,this.y,this.size,this.size);
    },
  };
}


function draw(){
  background(20);
//call the functions
  ball.move();
  ball.display();
  ball.bounce();

  ellipse(ball.x,ball.y,ball.size,ball.size);

  }

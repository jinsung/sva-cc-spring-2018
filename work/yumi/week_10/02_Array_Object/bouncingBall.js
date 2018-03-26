class BouncingBall{
  constructor(x, y, size, speedX, speedY, color){
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
    this.color = color;
  }

  move(){
    this.x += this.speedX;
    this.y += this.speedY;
  }

  display(){
    ellipse(this.x, this.y, this.size, this.size);
    fill(this.color)
    stroke(255, 30);
  }

  bounce(){
    if(this.x > width || this.x < 0){
      this.speedX = this.speedX *- 1;
    }
    if(this.y > height || this.y < 0){
      this.speedY = this.speedY *- 1;
    }
  }
}

class BouncingBall {
  constructor (x, y, size, speedX, speedY, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
    this.color = color;
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse (this.x, this.y, this.size, this.size);
  }

  bounce() {
    if (this.x > width || this.x < 0) {
      this.speedX *= -1;
      //this.speedX = this.speedX * -1;
    } else if (this.y > height || this.y < 0) {
      this.speedY = this.speedY * -1;
    }
  }
}

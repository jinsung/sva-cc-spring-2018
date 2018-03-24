class BouncingBall {
  constructor(x, y, size, speed, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  bounce() {
    if (this.x < 0 || this.x < width) {
      this.speedX *= -1;
    }

    if (this.y < 0 || this.y < height) {
      this.speedY *= -1;
    }
  }

  display() {
    ellipse(this.x, this.y, this.size, this.size);
  }
}

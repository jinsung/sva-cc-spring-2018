class BouncingBall {
  constructor(x, y, size, speedX, speedY, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
    this.color = color;
  }

  move() {
    this.x = this.x + this.speedX;
    this.y += this.speedY; // same as this.
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }

  bounce() {
    if (this.x > width || this.x < 0) {
      this.speedX = this.speedX * -1;
    }
    if (this.y > height || this.y < 0) {
      this.speedY = this.speedY * -1;
    }
}
}

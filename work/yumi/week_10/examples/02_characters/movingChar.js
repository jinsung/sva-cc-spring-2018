class MovingChar {
  constructor(char, x, y, size, speedX, speedY) {
    this.char = char;
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  move() {
    this.y = this.y + random(-.3, .3);
  }

  bounce (width, height) {
    if (this.x > width || this.x < 0) {
      this.speedX = this.speedX * -1;
    } else if (this.y > height || this.y < 0) {
      this.speedY = this.speedY * -1;
    }
  }

  draw () {
    //textSize(this.size);
    text(this.char, this.x, this.y);
  }
}

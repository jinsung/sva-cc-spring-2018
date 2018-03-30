class MovingChar {
  constructor(char, x, y, size, speed) {
    this.char = char;
    this.targetPosX = x;
    this.targetPosY = y;
    this.speed = speed;
    this.size = size;
    this.x = random(width);
    this.y = random(height);
  }

  move() {
    var diffX = this.targetPosX - this.x;
    var diffY = this.targetPosY - this.y;
    this.x = this.x + diffX * this.speed;
    this.y = this.y + diffY * this.speed;
  }

  bounce (width, height) {
    if (this.x > width || this.x < 0) {
      this.speedX = this.speedX * -1;
    } else if (this.y > height || this.y < 0) {
      this.speedY = this.speedY * -1;
    }
  }

  draw () {
    textSize(this.size);
    text(this.char, this.x, this.y);
  }
}

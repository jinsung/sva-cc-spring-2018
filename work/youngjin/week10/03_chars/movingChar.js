class MovingChar {
  constructor(char, x, y, size, speed, color) {
    this.char = char;
    this.targetX = x;
    this.targetY = y;
    this.x = x + random(100);
    this.y = y + random(-50, 50);
    this.size = size;
    this.speed = speed;
    this.color = color;
  }

  move() {
    var diffX = this.targetX - this.x;
    var diffY = this.targetY - this.y;

    this.x = this.x + diffX * this.speed;
    this.y = this.y + diffY * this.speed;
  }

  display() {
    fill(this.color);
    textSize(this.size);
    text(this.char, this.x, this.y);
  }
}

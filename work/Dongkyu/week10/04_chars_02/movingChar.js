class MovingChar {
  constructor(char, x, y, size, speed, color) {
    this.char = char;
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    this.color = color;
  }

  move() {
  }

  display() {
    fill(this.color);
    textSize(this.size);
    text(this.char, this.x, this.y);
  }

}

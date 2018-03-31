class MovingChar {
  constructor(char, x, y, size, speed) {
    this.char = char;
    this.targetPosX = x;
    this.targetPosY = y;
    this.speed = speed;
    this.size = size;
    this.x = x + random(100);
    this.y = y + random(-50, 50);
    this.rotation = random(PI * 2);
    this.alpha = 0;
  }

  move() {
    var diffX = this.targetPosX - this.x;
    var diffY = this.targetPosY - this.y;
    this.x = this.x + diffX * this.speed;
    this.y = this.y + diffY * this.speed;
    var diffRot = 0 - this.rotation;
    this.rotation = this.rotation + diffRot * this.speed;
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
    push();
    translate(this.x, this.y);
    rotate(this.rotation);
    fill(random(0,250));
    text(this.char, 0, 0);
    pop();
  }
}

function Leaf() {
  this.pos = createVector(random (width), random(height));

  this.show = function() {
    fill(255);
    noStroke();
    ellispe(this.pos.x, this.pos.y, 4, 4);
  }

}

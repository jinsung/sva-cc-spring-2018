function Particle(x, y, size){
  this.x = x;
  this.y = y;
  this.size = size;

  this.update = function(x, y){
    this.x = x;
    this.y = y;
  };

  this.draw = function(){
    ellipse(this.x, this.y, this.size, this.size);
    size = random(100);

  };

}

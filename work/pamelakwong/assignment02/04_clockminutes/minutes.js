class Minutes {
  constructor(x, y){
    this.x = (width-1)/24;
    this.y = (height-1)/60;
  }

  drawCanvas(){
    for (var i = 0; i < width; i = i + this.x){
      for (var j = 0; j < height; j = j + this.y){
        rect(i, j, this.x, this.y);
        fill(0, 255, 233);
      }
    }
  }

  currentTime(){
    this.h = hour();
    this.m = minute();
  }

  currentMinute(){
    for (var i = 0; i < this.h * ((width-1)/24); i = i + (width-1)/24){
      for (var j = 0; j < this.m * ((height-1)/60); j = j + (width-1)/60){
        rect(i, j, (width-1)/24, (width-1)/60);
        fill(255);
      }
    }
  }


  display(){
    textFont('Courier');
    textSize(30);
    text(this.h);
  }
}

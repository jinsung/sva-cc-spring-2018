var i;
var j;
var rectWidth;
var rectHeight;

class Minutes {
  constructor(x, y, color){
    //width of the canvas
    this.x = x;
    //height of the canvas
    this.y = y;
    rectWidth = this.x/24;
    rectHeight = this.y/60;
    this.color = color;
  }

  updateTime(){
    this.h = hour();
    this.m = minute();
    this.s = second();
  }

  displayTime(){
    fill(0, 0, 255);
    textSize(25);
    textLeading(50);
    text(this.h, width/2, 1100);
    text(this.m, width/2 + 50, 1100);

  }

  drawBoxes(){
    for (i = 0; i < this.x; i = i + rectWidth){
      for (j = 0; j < this.y; j = j + rectHeight){
        rect(i, j, rectWidth, rectHeight);
        fill(0, 255, 233);
      }
    }
  }


  drawSeconds(){
    var secondDiff = this.s - second();
    this.s = this.s - secondDiff * 0.1;
    var secondBarHeight = map(this.s, 1, 60, 0, this.y);
    rect(this.x+50, 0, 100, secondBarHeight);
  }

  currentMinute(){
    if(mouseIsPressed){
      for (i = 0; i < this.h * rectWidth; i = i + rectWidth){
        for (j = 0; j < this.m * rectHeight; j = j + rectHeight){
          rect(i, j, rectWidth, rectHeight);
          fill(255);
        }
      }
    }
  }

}

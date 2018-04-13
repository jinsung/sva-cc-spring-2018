class Seconds{
  constructor(x, y){
    //width of the canvas
    this.x = x;
    //height of the canvas
    this.y = y;
    rectWidth = this.x/24;
    rectHeight = this.y/60;
    this.s = second();
  }


  drawSeconds(){
    var secondDiff = this.s - second();
    this.s = this.s - secondDiff * 0.1;
    var secondBarHeight = map(this.s, 1, 60, 0, this.y);
    rect(this.x+50, 0, 100, secondBarHeight);
  }

  drawBoxes(){
    for (i = 0; i < this.x; i = i + 2 * rectWidth){
      for (j = 0; j < this.y; j = j + 2 * rectHeight){
        rect(i, j, rectWidth, rectHeight);
        fill(100, 255, 233);
      }
    }
  }
}

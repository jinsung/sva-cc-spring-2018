/*Name: Pamela Kwong
  Date: 20180407
  Project: This class indicates the current minute.

  minutes.js
  draws the boxes into the createCanvas
  and highlights the currentTime
  when you press on the mouse.

*/
var minutes;
var h;
var m;

function setup() {
  createCanvas(1200, 1200);

  minutes = new Minutes(1000, 1000, 255);
}

function draw() {

  minutes.drawBoxes();
  minutes.currentMinute();
  minutes.updateTime();
  minutes.drawSeconds();
  minutes.displayTime();

}

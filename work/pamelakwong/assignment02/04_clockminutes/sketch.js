/*Name: Pamela Kwong
  Date: 20180407
  Project: This class indicates the current minute.

  minutes.js
  draws the boxes into the createCanvas
  and highlights the currentTime
  when you press on the mouse.

*/
var minutes;
var seconds;

function setup() {
  createCanvas(1200, 1200);

  minutes = new Minutes(1000, 1000, 255);
  seconds = new Seconds(1000, 1000);

}

function draw() {

  minutes.drawBoxes();
  minutes.currentMinute();
  minutes.updateTime();
  minutes.displayTime();


  seconds.drawSeconds();
  seconds.drawBoxes();

}

/*Name: Pamela Kwong
  Date: 20180407
  Project: This class indicates the current minute.

  minutes.js
  draws the boxes into the createCanvas

  currentminute.js
  highlights the currentMinute

*/
var minutes;
var currentMinute;

function setup() {
  createCanvas(1200, 1200);
  minutes = new Minutes(1000, 1000);
//  h = hour();
//  m = minute();
//  currentMinute = new CurrentMinute(h, m);

}

function draw() {
   minutes.drawCanvas();
   minutes.currentTime();
   minutes.currentMinute();
   minutes.display();
   currentMinute.display();




}

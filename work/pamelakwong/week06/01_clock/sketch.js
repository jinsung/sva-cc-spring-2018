var h;
var m;
var s;

function setup() {
  createCanvas(500, 500);
  s = second();
}

function updateTime() {
  h = hour();
  if (h > 12){
    h = h - 12;
  }
  m = minute();

  var secondDiff = s - second();
  s = s - secondDiff * 0.1;

}

function displayClockInText(){
  textFont('Helvetica');
  textSize(30);
  fill(0, 0, 210);
  textStyle(ITALIC);
  text('Time. ' + h + ': ' + m + ': ' + s, 50, 50);
  var intS = parseInt(s);
/*  fill(0, 192, 153);
  text('Minute: ' + m, 50, 90);
//  fill(0, 60, 73);
  text('Second: ' + s, 50, 130);
*/

}

function displayClockBar () {
  var barHeight = height/2 * 0.333;
  //data visualization with mapping function
  var hourBarWidth = map(h, 0, 12, 0, width);
  rect(0, height/2 - 100, hourBarWidth, barHeight);

  var minuteBarWidth = map(m, 1, 60, 0, width);
  rect(0, height/2, minuteBarWidth, barHeight);

  var secondBarWidth = map(s, 1, 60, 0, width);
  rect(0, height/2 + 100, secondBarWidth, barHeight);
}

function draw() {
   background(255);
   updateTime();
   displayClockInText();
   displayClockBar();
}

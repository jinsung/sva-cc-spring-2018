var h;
var m;
var s;
var ampm;
var secondDiff;

function setup() {
 createCanvas(500, 500);
 s = 0;

}

function draw() {
  background(200)
  updateTime();
  displayClockInText();
  displayClockBar();

}

function displayClockInText(){
  textFont('Georgia');
  textSize(20);
  textStyle(BOLD);
  noStroke();
  text('Hour: ' + h + ampm, 50, 50);
  text('Minute: ' + m, 50, 90);
  text('Second: ' + s, 50, 130);

}

function displayClockBar() {
  var barHeight = height/2 * 0.333;
  var hourBarWidth = map(h, 0, 12, 0, width);
  rect(0, 200, hourBarWidth, barHeight);

  var minuteBarWidth = map(m, 0, 60, 0, width);
  rect(0, 283, minuteBarWidth, barHeight);

  var secondBarWidth = map(s, 0, 60, 0, width);
  rect(0, 366, secondBarWidth, barHeight);


}

function updateTime(){
  h = hour();
  if (h > 12) {
    ampm = 'pm';
    h = h - 12;
  } else {
    ampm = "am";
  }
  m = minute();
  secondDiff = s - second();
  s = s - secondDiff * 0.1;
}

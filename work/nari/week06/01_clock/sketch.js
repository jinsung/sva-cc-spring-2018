var h;
var m;
var s;
var ampm;

function setup() {
  createCanvas(500, 500);
  s = second();
}

function draw() {
  background(250);
  updateTime();
  displayClockInText();
  displayClockBar();
}

function displayClockInText() {
  textSize(40);
  textStyle(BOLD);

  fill(0,180);
  text('Hour: ' + h + ampm, 30, 80);

  fill(0,90);
  text('Minute: ' + m, 30, 125);

  //display whole number for seconds (display integer instead of floating number)
  var intS = parseInt(s);

  fill(0,30);
  text('Second: ' + intS, 30, 170);
}

function displayClockBar() {
  var barHeight = height/2 * 0.333;

  fill(0,180);
  noStroke();
  var hourBarWidth = map(h, 1, 12, 0 , width);
  rect(0, height/2, hourBarWidth, barHeight);

  fill(0,90);
  var minuteBarWidth = map(m, 0, 60, 0 , width);
  rect(0, height/2 + barHeight, minuteBarWidth, barHeight);

  fill(0,30);
  var secondBarWidth = map(s, 0, 60, 0 , width);
  rect(0, height/2 + (barHeight*2), secondBarWidth, barHeight);
}

function updateTime() {
  h = hour();
  if (h > 12) {
    ampm = "pm";
    h = h-12;
  } else {
    ampm = "am";
  }

  m = minute();

  //calculate 10% of the difference between the destination and current position.
  //this is for the animation
  var secondDiff = s - second();
  s = s - secondDiff * 0.1;
}

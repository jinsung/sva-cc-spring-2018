var h;
var m;
var s;
var ampm;

function setup() {
  createCanvas(500, 500);
  s = second();
}


function draw() {
  background(200);
  updateTime();
  displayClockInText();
  displayClockBar();
}

function displayClockInText() {
  textFont('Georgia');
  var intS = parseInt(s);
  text('Second: ' + intS , 50, 50);
}

function displayClockBar () {
  var barHeight = height/2 * 0.333;
  var hourBarWidth = map(h, 0, 12, 0, width);
  //rect(0, height/2, hourBarWidth, barHeight );

  var secondBarWidth = map(s, 0, 60, 0, width);
  rect(0, height/2, secondBarWidth, barHeight );
}

function updateTime() {
  h = hour();
  if (h > 12) {
    ampm = "pm";
    h = h - 12;
  } else {
    ampm = "am";
  }
  m = minute();
  var secondDiff = s - second();
  s = s - secondDiff * 0.1;
}

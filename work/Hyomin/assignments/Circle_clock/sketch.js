var h;
var m;
var s;
var ampm;
var secondDiff;

function setup() {
  createCanvas(600, 600);
  s = second ();
}

function draw() {
  background(255);
  updateTime();
  displayClockInText();
  displayClockerBar();

}

function displayClockInText() {
  var intS = parseInt(s);
  text('second:' + intS , 100, 50);
}

function displayClockerBar () {

  var secondBarwith = map(s, 0, 60, 0, 600);
  var minuteBarwith = map(m, 0, 60, 300, 600);
  var hourBarwidth = map(h, 0, 12, 0, 300);
  noFill()
  ellipse(250, 250, hourBarwidth, hourBarwidth );
  ellipse(250, 250, minuteBarwith, minuteBarwith );
  ellipse(250, 250, secondBarwith, secondBarwith );
  noFill()
}

function updateTime(){
  h = hour();
  if (h>12) {
    h = h - 12;
    ampm = "pm";
  }else {
    ampm = "am"
  }

    m = minute();
    var secondDiff = s - second();
    s = s - secondDiff * 0.1;

}

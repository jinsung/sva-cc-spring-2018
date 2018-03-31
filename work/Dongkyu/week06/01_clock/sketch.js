var h;
var m;
var s;

function setup() {
  createCanvas(500, 500);
  s = second();

}

function draw() {
  background(200);
  updateTime(); //call the function....
  displayClockInText(); //call the function..
  displayClockBar();
}

function displayClockInText() {
  textFont('Helvetica');
  textSize(48);
  //var intS = parseInt(s)
  text('Hour: ' + h + ' ' + AMPM, 50, 60);
  fill(50, 60, 250);
  text('Minute: ' + m, 50, 120);
  fill(50, 60, 200);
  text('Second: ' + s, 50, 180);
  fill(50, 60, 150);
}

function displayClockBar () {
  var barHeight = height/2 * 0.333; //local var
  var hourBarWidth = map(h, 1, 12, 0, width - 50);
  rect(50, 200, hourBarWidth, barHeight );

  var minuteBarWidth = map(m, 0, 60, 0, width - 50);
  rect(50, 300, minuteBarWidth, barHeight );

  var secondBarWidth = map(s, 0, 60, 0, width - 50 );
  rect(50, 400, secondBarWidth, barHeight );




}


function updateTime() {
  h = hour();
  if (h > 12) {
    AMPM = "PM"
    h = h - 12;
  } else {
    AMPM = "AM"
  }
  m = minute();
  var secondDiff = s - second();
  s = s - secondDiff * 0.1; // 10percent of whatever diffrence is
  //s = second();
}

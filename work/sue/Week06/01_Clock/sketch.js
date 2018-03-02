var h;
var m;
var s;
var ampm;


function setup() {
  createCanvas(500, 500);
  s = second();

}



function draw() {
  background(233);
  updateTime();
  displayClockInText();
  displayClockBar();
}



function displayClockInText() {
  textSize(50);
  fill(0, 102, 153);
  text('Hour: ' + h + ampm, 10, 50);

  textSize(30);
  fill(0, 102, 153, 85);
  text('Minute: ' + m, 10, 220);

  textSize(20);
  fill(0, 102, 153, 50);
  var intS = parseInt(s);
  text('Second: ' + intS, 10, 400);


}


function displayClockBar() {
  var barHeight = height/2 * 0.333;

  var hourBarWidth = map(h, 1, 12, 0, width);
                     //map(minInputVal, maxInputVal, minOutputVal, maxOutputVal)
  noStroke();
  fill(0, 102, 153);
  rect(0, 50, hourBarWidth, barHeight);

  var minuteBarWidth = map(m, 0, 60, 0, width);
  fill(0, 102, 153, 85);
  rect(0, 220, minuteBarWidth, barHeight )

  var secondBarWidth = map(s, 0, 60, 0, width);
  fill(0, 102, 153, 50);
  rect(0, 400, secondBarWidth, barHeight);

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
  secondDiff = s - second();
  s = s - secondDiff * 0.1



}

var h;
var m;
var s;
var ampm;
var secondDiff

function setup (){
  createCanvas (500,500);
  s = second();
}


function draw(){
  background(255,255,255);
  updateTime();
  displayClockInText();
  displayClockBar()
}


function displayClockInText() {
  textSize (50);
  text('Hour: ' + h, 50, 100);
  text('Minute: ' + m, 50, 200)
  var intS = parseInt(s)
  text('Second: ' + s, 50, 300)
  fill (255,0,73)
}

function displayClockBar (){
  var barHeight = height/2 * 0.333;
  var hourBarWidth = map(h, 0, 12, 0, width);
  rect(0, 60, hourBarWidth, barHeight)

  var minuteBarWidth = map(h, 0, 60, 0, width);
  rect(0, 160, minuteBarWidth, barHeight)

  var secondBarWidth = map(s, 0, 60, 0, width);
  rect(0, 260, secondBarWidth, barHeight);

}

function updateTime (){
  h = hour();
  if (h > 12){
    ampm = "pm"
    h = h - 12;
  } else {
    ampm = "am"
  }
  m = minute();
  var secondDiff = s - second();
  s = s - secondDiff * 0.1;
}

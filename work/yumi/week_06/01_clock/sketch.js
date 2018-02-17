var hr;
var min;
var sec;
var ampm;
//var secDiff;//store previous and current second

function setup() {
  createCanvas(500, 500);
  sec = second();
}

function draw() {
  background(0);
  updateTime();
  displayClockInText();
  //displayLine();
  displayClockBar();
}

function displayClockInText(){
  var intS = parseInt(sec);

  noStroke();
  fill(255);
  text("Hour:" + hr + "" + ampm, 50, 50);
  text("Minute:" + min, 50, 75);
  text("Second:" + intS, 50, 100);
}

function updateTime(){
  hr = hour();
  if(hr > 12){
    ampm = "pm";
    hr = hr - 12;
  } else {
    ampm = "pm";
  }
  min = minute();
  var secDiff = sec - second();
  sec = sec - secDiff * 0.1;//10% of different one point to the destination
}

function displayLine(){
  stroke(255);
  //strokeWeight(100 - sec);
  line(width/61*sec, 0, width/61*sec, height);
}

function displayClockBar(){
  var barHeight = height/2*0.333;
  var secBarWidth = map(sec, 0, 60, 0, width);
  //min/max value of input + min/max value of output
  var minBarWidth = map(min, 0, 60, 0, width);
  var hrBarWidth = map(hr, 0, 12, 0, width);
  fill(0+sec*5, 0, 255-sec*5);
  rect(0, height/2, secBarWidth, barHeight);
  fill(0, 0, 255);
  rect(0, height/2 + barHeight, minBarWidth, barHeight);
  fill(0, 0, 200);
  rect(0, height/2 + barHeight*2, hrBarWidth, barHeight);
}

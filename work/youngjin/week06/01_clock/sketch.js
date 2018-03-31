var h;
var m;
var s;
var ampm;
var secondDiff;

function setup() {
  createCanvas(500, 500);
}


function draw() {
  background(260);
  updateTime();
  displayClockInText();
  displayClockBar();
  fill( 250 );

}

function displayClockInText(){
  textFont('Georgia');
  var intS = parseInt(s);
  fill(100);
  text('Hour: ' + h + ampm, 50, 50);
  fill(0, 102, 153);
  text('Minute: ' + m, 50, 60);
  fill(0, 100, 153);
  text('Second ' + s, 50, 70);
}

function displayClockBar () {
  var barHeight = height/2 * 0.333;
  var hourBarWidth = map(h, 1, 12, 0, width);
  rect(0, height/2, 200, barHeight );
  //rect(0, height/2, hourBarWidth, barHeight );

  var secondBarWidth = map(s, 1, 60, 0, width);
  rect(0, height/2, secondBarWidth, barHeight );

  var thirdBarWidth = map (m, 1, 180, 0, width);
  rect(0, height/3, thirdBarWidth, barHeight );
}

function updateTime() {
  h = hour();
  if (h > 12){
    ampm = "pm";
    h = h - 12;
  } else {
    ampm = "am";
  }
  m = minute();
  var secondDiff = s - second();
  s = s - secondDiff * 0.1;
}

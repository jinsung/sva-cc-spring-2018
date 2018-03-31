var h;
var m;
var s;
var ampm;

var rectWidth;

function setup() {
  frameRate(6);
  createCanvas(window.innerWidth, window.innerHeight);
  s = second();

}

function draw() {
  background(0);
  updateTime();
  rectBar();
  displaySeconds();
  displayClockInText();
  displayMilis();
}

function displayClockInText() {
  textAlign(CENTER);
  textStyle(BOLD);
  textFont('Helvetica');
  fill(255);

  //relative font size to the browser width
  if (width <= 750) {
    textSize(120);
  } else if (width > 750 && width < 980) {
    textSize(160);
  } else if (width >= 980) {
    textSize(200);
  }

  //always display time in two digits
  if (h < 10) {
    h = "0" + h;
  }

  if (m < 10) {
    m = "0" + m;
  }

  //display time
  text(h + ':' + m + ' ' + ampm, width/2, height/2);
}

function updateTime() {
  h = hour();
  if (h > 12) {
    ampm = "pm";
    h = h - 12;
  } else if (h == 12) {
    ampm = "pm"
  } else {
    ampm = "am";
  }

  m = minute();
}


function displaySeconds() {
  //display whole number for seconds (display integer instead of floating number)
  var intS = parseInt(s);

  //display seconds in two digits
  if (second() < 10) {
    intS = "0" + second();
  } else {
    intS = second();
  }

  textAlign(CENTER);
  textStyle(BOLD);
  textSize(random(20,800));
  textFont('Helvetica');
  fill(random(20,180),random(0,180),random(100,250));

  text(intS, random(200,(width-200)) ,random (200,height));
}

function rectBar() {
  var rectWidth = width/60;
  for (i = 0; i <= 60; i++) {
    noStroke();
    fill(255, 6);
    rect(0, 0, rectWidth, height/40);

    rectWidth = rectWidth + second();
  }
}

function displayMilis(){
  var millisecond = millis();

  textStyle(ITALIC);
  textAlign(LEFT);
  textSize(12);
  fill(255,100);
  text('MILLISECONDS: ' + millisecond, 30, 50);
}

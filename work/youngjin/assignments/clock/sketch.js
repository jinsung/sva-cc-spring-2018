var h;
var m;
var s;
var ampm;
var secondDiff;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
}

function draw() {
  background(0, 0, 0);

  translate(400, 400);
  rotate(-90);

  let h  = hour();
  let m = minute();
  let s = second();

  // seconds arc
  strokeWeight(2);
  stroke(255, 50, 217);
  noFill();
  let secondAngle = map(s, 0, 60, 0, 360);
  arc (0, 0, 350, 350, 0, secondAngle);

  // minutes arc
  strokeWeight(4);
  stroke(71, 20, 255);
  let minuteAngle = map (m, 0, 60, 0, 360);
  arc(0, 0, 280, 280,  0, minuteAngle);

  //hours arc
  strokeWeight(8);
  stroke(20, 255, 172);
  let hourAngle = map(h % 12, 0, 12, 0, 360);
  arc (0, 0, 150, 150,  0, hourAngle);

  //center point
  strokeWeight(2);
  stroke(20, 255, 243);
  point(0, 0);

  //time in text
  rotate(90);
  fill(250);
  noStroke();
  text(h + ':' + m + ":" + s + ":" + ampm, -75, 280);
  textSize(30);
  updateTime();
}

function updateTime() {
  h = hour();
  if (h > 12){
    ampm = "PM";
    h = h - 12;
  } else {
    ampm = "AM";
  }
  m = minute();
  var secondDiff = s- second();
  s = s - secondDiff * 0.1;
}

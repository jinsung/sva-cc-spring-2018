var h;
var m;
var s;
var ampm;

function setup() {
  createCanvas(500,500);
  s = second ();
}

function draw() {
  background(200);
  updateTime();
  dislayClockInText();
  displayClcokBar();
}

function dislayClockInText(){
  //textSize (mouseY);
  map(width, width, 100, 500);
  //fill(mouseX,0,0);

  textSize (10);
  text('Hour: ' + h + ampm, 20, 40);
  text('Minute: ' + m, 20, 190);
  var intS = parseInt(s);
  text('Second: ' + intS, 20, 340);

}

function displayClcokBar(){
  var barHeight = height/2 * 0.333;

  var hourBarWidth = map(h, 0, 12, 0, width);
  rect(0, 50, hourBarWidth, barHeight);

  var minBarWidth = map(m, 0, 60, 0, width);
  rect(0, 200, minBarWidth, barHeight)

  var secondBarWidth = map(s, 0, 60, 0, width);
  rect (0, 350, secondBarWidth, barHeight);


}

function updateTime () {
  h = hour();
  if (h > 12) {
    h = h - 12;
    ampm = "pm"
  } else {
    ampm = "am"
  }

  m = minute();

  var secondDiff = s - second();
  s = s - secondDiff * 0.1;

}

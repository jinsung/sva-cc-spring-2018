var h;
var m;
var s = second();


function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
  rectMode(CENTER);

}

function draw() {
  background(200);
  translate(width/2, height/2);
  rotate(0);

  updateTime();
  displayClcokBar();
}

function displayClcokBar(){
  var secondBarAngle = map(s, 0, 60, 0, 360);
  rotate(secondBarAngle);
  line (0, 0, 100, secondBarAngle);
  secondBarAngle = secondBarAngle + s;

  /*
  var mBarAngle = map(m, 0, 60, 0, 360);
  rotate(mBarAngle);
  line (0, 0, 50, mBarAngle);
  mBarAngle = mBarAngle + m;
  */
}

function updateTime (){
  s = second();
  m = minute();
  h = hour();
}

var sc;
var milli;
var ampm;
var hr

var circle ={
  x:1,
  xSpeed:1.2,
  y:2,
  ySpeed:3.1,
  size:20,
};

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);

  sc = second();
  hr = hour();
  mn = minute();
}

function draw(){
  background(230);

  //color
  r = map(circle.x, 0, windowWidth, 0, 255);
  g = map(circle.y, 0, windowHeight, 0, 255);

  let secondEllipse = 1;
  let minuteEllipse = 5;
  let mn = minute();
  let sc = second();

  //updateTime();
  noCursor();
  translate(mouseX, mouseY);
  rotate(-90);

  //Background Ellipse
  fill(r, g, 100);
  ellipse(0, 0, 350, 350);

  fill(30);
  ellipse(0, 0, 310, 310);

  //Big Rotate Circles
  push();
  var mEllipse = map(minuteEllipse, 0, 60, 0, 360);

  for (minuteEllipse = 0; minuteEllipse < 360; minuteEllipse = minuteEllipse + 1) {
    rotate(mEllipse);
    fill(255);
    ellipse(0,140,5,5);
  }
  pop();


  //Mini Rotate Circles
  push();
  var outlineEllipse = map(secondEllipse, 0, 60, 0, 360);

  for (secondEllipse = 0; secondEllipse < 360; secondEllipse = secondEllipse + 1) {
    rotate(outlineEllipse);
    fill(255);
    ellipse(0,140,2,2);
  }
  pop();


  //stroke(255, 0,0);
  var secondAngle = map(sc, 0, 60, 0, 360);
  //arc(0,0,300,300, 0, secondAngle);

  //stroke(0, 255, 0);
  var minAngle = map(mn, 0, 60, 0, 360);
  //arc(0, 0, 250, 250, 0, minAngle);

  //stroke(0, 0, 255);
  var hourAngle = map(hr % 12, 0, 12, 0, 360);
  //arc(0, 0, 200, 200, 0, hourAngle);


  push();
  rotate(minAngle);
  strokeWeight(3);
  stroke(255);
  line(0, 0, 130, 0);
  pop();

  push();
  rotate(hourAngle);
  strokeWeight(3);
  stroke(255);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(secondAngle);
  strokeWeight(3);
  stroke(r, g, 100);
  line(-20, 0, 150, 0);
  pop();

  //Center Circle
  fill(r, g, 100);
  noStroke();
  ellipse(0, 0, 10, 10);

  //This makes circle bounce
  circle.x = circle.x + circle.xSpeed
  circle.y = circle.y + circle.ySpeed

  if (circle.x < 0 || circle.x > width) {
    circle.xSpeed = circle.xSpeed * -1;
  }

  if (circle.y < 0 || circle.y > height) {
    circle.ySpeed = circle.ySpeed * -1;
  }

  //bouncing circle
  noFill();
  noStroke();
  ellipse(circle.x, circle.y, circle.size, circle.size);
}

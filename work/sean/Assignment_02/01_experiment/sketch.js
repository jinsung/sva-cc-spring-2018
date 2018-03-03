var sc;
var milli;
var ampm;
var hr

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);

  sc = second();
  hr = hour();
  mn = minute();
}

function draw(){
  background(240);

  let secondEllipse = 1;
  let mn = minute();
  let sc = second();

  updateTime();

  translate(200,200);
  rotate(-90);

  //Background Circle
  fill(255);
  ellipse(0, 0, 350, 350);

  fill(56);
  ellipse(0, 0, 310, 310);

  //Outline Circles


  push();
  var outlineEllipse = map(secondEllipse, 0, 60, 0, 360);

  for (secondEllipse = 0; secondEllipse < 360; secondEllipse = secondEllipse + 1) {
    rotate(outlineEllipse);
    fill(255);
    ellipse(0,140,5,5);
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
  stroke(255, 0,0);
  line(-20, 0, 150, 0);
  pop();



  //Center Circle
  fill(255,0,0);
  noStroke();
  ellipse(0, 0, 10, 10);

  //Time Text
  rotate(90);

  fill(56);

  fill(240);

  var intS = parseInt(sc);
  text(hr + ':' + mn + ':' + intS + ampm, -25, -25);

}


function updateTime () {
  hr = hour();
  if (hr > 12) {
    hr = hr - 12;
    ampm = "pm"
  } else {
    ampm = "am"
  }

  //var secondDiff = sc - second();
  //sc = sc - secondDiff * 0.1;
}

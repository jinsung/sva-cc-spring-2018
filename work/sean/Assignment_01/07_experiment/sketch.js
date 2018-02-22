var sc;
var milli;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);

  sc = second();
  hr = hour();
  mn = minute();

}

function draw(){
  background(0);
  updateTime();

  translate(200,200);
  rotate(-90);



  strokeWeight(8);
  noFill ();




  //stroke(255, 0,0);
  var milliAngle = map(sc, 0, 1, 0, 360);
  //arc(0,0,300,300, 0, secondAngle);

  //stroke(255, 0,0);
  var end = map(sc, 0, 1, 0, 360);
  //arc(0, 0, 300, 300, 0, end);

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
  rotate(end);
  noStroke();
  fill(255);
  arc(0, 0, 300, 300, 0, end);
  pop();

  push();
  rotate(milliAngle);
  // strokeWeight(1);
  // stroke(255, 0,0);
  line(0, 0, 150, 0);
  pop();

  push();
  rotate(secondAngle);
  stroke(255, 0,0);
  line(0, 0, 150, 0);
  pop();

  push();
  rotate(minAngle);
  stroke(0, 255, 0);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke(0, 0, 255);
  line(0, 0, 50, 0);
  pop();

  stroke(255);
  point(0,0);

  fill(255);
  noStroke();
  text(hr + ':' + mn + ':' + sc, width/2, height/2);
}


function updateTime () {
  var secondDiff = sc - second();
  sc = sc - secondDiff * 0.1;
}

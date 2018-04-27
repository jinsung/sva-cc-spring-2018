
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES);

}

function draw() {
  background(255, 255, 255);
  translate(width/2, height/2);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(1);
  stroke(0, 0, 0);
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 200, 200, 0, secondAngle);

  strokeWeight(6);
  stroke(0, 0, 0);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 170, 170, 0, minuteAngle);

  strokeWeight(10);
  stroke (0, 0, 0);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 140, 140, 0, hourAngle);

  strokeWeight(1);
  push();
  rotate(secondAngle);
  stroke(0, 0, 0);
  line(0, 0, 60, 0);
  pop();

  strokeWeight(6);
  push();
  rotate(minuteAngle);
  stroke(0, 0, 0);
  line(0, 0, 40, 0);
  pop();

  strokeWeight(10);
  push();
  rotate(hourAngle);
  stroke(0, 0, 0);
  line(0, 0, 20, 0);
  pop();


  stroke(255, 220, 20);
  point(0,0);

}

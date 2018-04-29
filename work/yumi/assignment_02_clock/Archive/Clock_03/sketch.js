var amp = 0;
var angle = 0;
var l = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);


}

function draw() {
  background(0);
  angle += 0.0075;
  amp = height*0.03;
  var sec = second();
  var min = minute();
  var hr = hour();
  var x = amp * sin(angle);
  var y = amp * cos(angle);
  textSize(16);

  //second
  push();
  translate(150, height-150);
  stroke(random(150, 200), 0, 50, 150);
  strokeWeight(1);
  noFill();
  line(0, 0, -x, y);
  line(0, 0, x, -y);

  noStroke();
  fill(random(150, 200), 0, 50);
  text('\n' + sec, -x, y+ 10);
  text('\n' + sec, x, -y+ 10);
  pop();

  push();
  translate(width/2, height-150);
  stroke(random(150, 200), 0, 50, 150);
  strokeWeight(1);
  noFill();
  line(0, 0, x, - y);
  line(0, 0, x, y);

  noStroke();
  fill(random(150, 200), 0, 50);
  text('\n' + sec, x, - y+ 10);
  text('\n' + sec, x, y+ 10);
  pop();

  push();
  translate(width-150, height-150);
  stroke(random(150, 200), 0, 50, 150);
  strokeWeight(1);
  noFill();
  line(0, 0, x, y);
  line(0, 0, -x, -y);

  noStroke();
  fill(random(150, 200), 0, 50);
  text('\n' + sec, x, y+ 10);
  text('\n' + sec, -x, -y+ 10);
  pop();

  //hour
  push();
  translate(150, 150);
  stroke(80, random(250, 200), 200, 100);
  strokeWeight(1);
  noFill();
  line(0, 0, -x, y);
  line(0, 0, x, -y);

  noStroke();
  fill(80, random(250, 200), 200);
  text('\n' + hr, -x, y+ 10);
  text('\n' + hr, x, -y+ 10);
  pop()

  push();
  translate(width-150, 150);
  stroke(80, random(250, 200), 200, 100);
  strokeWeight(1);
  noFill();
  line(0, 0, x, y);
  line(0, 0, -x, -y);

  noStroke();
  fill(80, random(250, 200), 200);
  text('\n' + hr, x, y+ 10);
  text('\n' + hr, -x, -y+ 10);
  pop()

  push();
  translate(width/2, 150);
  stroke(80, random(250, 200), 200, 100);
  strokeWeight(1);
  noFill();
  line(0, 0, -x, y);
  line(0, 0, -x, -y);

  noStroke();
  fill(80, random(250, 200), 200);
  text('\n' + hr, -x, y+ 10);
  text('\n' + hr, -x, -y+ 10);
  pop()

  //minute

  push();
  translate(width/2, height/2);
  stroke(125, 0, random(200, 225), 150);
  strokeWeight(1);
  noFill();
  line(0, 0, -x, y);
  line(0, 0, -x, -y);

  noStroke();
  fill(125, 0, random(200, 225));
  text('\n' + min, -x, y+ 10);
  text('\n' + min, -x, -y+ 10);
  pop()

  push();
  translate(150, height/2);
  stroke(125, 0, random(200, 225), 150);
  strokeWeight(1);
  noFill();
  line(0, 0, x, y);
  line(0, 0, -x, -y);

  noStroke();
  fill(125, 0, random(200, 225));
  text('\n' + min, x, y+ 10);
  text('\n' + min, -x, -y+ 10);
  pop()

  push();
  translate(width-150, height/2);
  stroke(125, 0, random(200, 225), 150);
  strokeWeight(1);
  noFill();
  line(0, 0, -x, y);
  line(0, 0, x, -y);

  noStroke();
  fill(125, 0, random(200, 225));
  text('\n' + min, -x, y+ 10);
  text('\n' + min, x, -y+ 10);
  pop()


}

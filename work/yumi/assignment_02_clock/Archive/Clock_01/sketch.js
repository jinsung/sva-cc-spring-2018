var angle = 0;
var amp = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

}

function draw() {
  background(0);

  amp = height;
  angle = angle + 0.005;
  var c = amp * cos(angle);
  var s = amp * sin(angle);
  var sec = second();
  var min = minute();
  var hr = hour();
  var space = 20;

    fill(0, 100 - c, 255, 100);
    rect(0, 0, s*1.75, height);

    fill(100, 0, 255 - c, 150);
    rect(0, height, width, c - 100);
    fill(0, 50 - c, 255);
    text('\n' + min, s - 35, c + 10);
    text('\n' + min, s - 35, amp + c*1.5);

    stroke(0, 50 - c, 255);
    noFill();
    strokeWeight(1);
    line(0, c, width, c);
    line(s, 0, s, height);
    line(s * 0.75, 0, s * 0.75, height);
    line(0, height + c*1.25, width, height + c*1.25);

    fill(0, 50 - c, 255);
    noStroke();
    text('\n' + sec, s + 20, height/2);
    text('\n' + sec, width/2, c - 40);
    text('\n' + hr, s * 0.75 + 20, 0 - c);
    text('\n' + hr, s - 500, height + c*1.25 + 20);

    textSize(16);

}

var barGradient;

function setup() {
  createCanvas(500, 500);
  frameRate(10);
}

/*function drawRectangle(x, y, rectX, rectY, rectR, rectG, rectB) {
  noStroke();
  fill(rectR,rectG, rectB);
  rect (x, y, rectX, rectY, rectR, rectG, rectB);
} */

function draw() {
  background(0);

  //blinking static
  for (var i = 0; i < 500; i++) {
    var lineColor = random(255);
    var lineWeight = random(5);
    var linePos = random(20, 140);

    stroke (lineColor);
    strokeWeight(lineWeight);
    line (0, linePos, width, linePos);
  }

  for (var i = 0; i < 500; i++) {
    var lineColor = random(255);
    var lineWeight = random(5);
    var linePos = random(410, 420);

    stroke (lineColor);
    strokeWeight(lineWeight);
    line (0, linePos, width, linePos);
  }

  for (var i = 0; i < 500; i++) {
    var lineColor = random(255);
    var lineWeight = random(5);
    var linePos = random(220, 240);

    stroke (lineColor);
    strokeWeight(lineWeight);
    line (0, linePos, width, linePos);
  }

  for (var i = 0; i < 500; i++) {
    var lineColor = random(200, 255);
    var lineWeight = random(50);
    var linePos = random(300,330);

    stroke (lineColor);
    strokeWeight(lineWeight);
    line (0, linePos, width, linePos);
  }

  //static
  stroke (255);
  strokeWeight(1);
  line (0, 240, width, 240);

  stroke (255);
  strokeWeight(10);
  line (0, height/2, width, height/2);

  stroke (50);
  strokeWeight(3);
  line (0, 180, width, 180);

  stroke (250);
  strokeWeight(2);
  line (0, 190, width, 190);

  stroke (random(140));
  strokeWeight(7);
  line (0, height/3, width, height/3);

  stroke (random(100));
  strokeWeight(10);
  line (0, 450, width, 450);

  stroke (random(120));
  strokeWeight(40);
  line (0, 390, width, 390);

  var strokePos = random(400,500);
  stroke (random(200));
  strokeWeight(random(4));
  line (0, strokePos, width, strokePos);

  // Mouse pressed
  if (mouseIsPressed) {
    background(0);

    //row 1
    noStroke();
    fill(255);
    rect (0, 10, width/7, 300);

    noStroke();
    fill(253, 252, 0);
    rect (width/7, 10, width/7, 300);

    noStroke();
    fill(0, 255, 255);
    rect (width/7*2, 10, width/7, 300);

    noStroke();
    fill(0, 255, 2);
    rect (width/7*3, 10, width/7, 300);

    noStroke();
    fill(255, 0, 255);
    rect (width/7*4, 10, width/7, 300);

    noStroke();
    fill(255, 0, 0);
    rect (width/7*5, 10, width/7, 300);

    noStroke();
    fill(0, 0, 255);
    rect (width/7*6, 10, width/7, 300);

    //row2
    noStroke();
    fill(0, 0, 255);
    rect (0, 310, width/7, 20);

    noStroke();
    fill(255, 0, 255);
    rect (width/7*2, 310, width/7, 20);

    noStroke();
    fill(0, 255, 255);
    rect(width/7*4, 310, width/7, 20);

    noStroke();
    fill(255);
    rect(width/7*6, 310, width/7, 20);

    //row3
    barGradient = 255;
    for (i=0; i < width/7*4; i = i + 10) {
      noStroke();
      fill(barGradient);
      rect(i, 330, width/7*4, 100);

      barGradient = barGradient - 10;
    }

    barGradient = 255;
    for (i=0; i < width/7*4; i = i + 9) {
      noStroke();
      fill(barGradient);
      rect(i + 286, 330, width/7*4, 100);

      barGradient = barGradient - 10;
    }

    //row4
    barGradient = 0;
    for (i=0; i < width/7*4; i = i + 40) {
      noStroke();
      fill(barGradient);
      rect(i, 430, 180, 50);

      barGradient = barGradient + 50;
    }

    noStroke();
    fill(0);
    rect(width/7*4, 430, 180, 50);

  }
}

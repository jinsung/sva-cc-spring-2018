

function setup() {
 createCanvas(1960, 1080);
 angleMode(DEGREES);


}

function draw() {
  background(255);

  noStroke();
  fill(0);
  rect(100, 250, 900, 200);

  noStroke();
  fill(200);
  rect(300, 100, 500, 500, 80);

  noStroke();
  fill(30);
  rect(350, 150, 400, 400, 40);

  translate(550, 350);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(20);
  stroke(191, 4, 0);
  noFill();
  ellipse(0, 0, 335);

  strokeWeight(20);
  stroke(127, 115, 4);
  noFill();
  ellipse(0, 0, 299);

  strokeWeight(20);
  stroke(0, 189, 191);
  noFill();
  ellipse(0, 0, 260);

  strokeWeight(20);
  stroke(255, 5, 0);
  noFill();
  let end1 = map(sc, 0, 60, 0, 360);
  arc(0, 0, 335, 335, 0, end1);

  stroke(255, 230, 8);
  let end2 = map(mn, 0, 60, 0, 360);
  arc(0, 0, 299, 299, 0, end2);

  stroke(0, 251, 255);
  let end3 = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, end3);


  push();
  rotate(90);
  textSize(40);
  fill(255);
  noStroke();
  text(hr % 12 + ':' + mn + ':' + sc, -50, 10);
  pop();
}

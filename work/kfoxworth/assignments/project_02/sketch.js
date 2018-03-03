

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);


}


function draw() {
  background(51);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  stroke(255);
  noFill();

  ellipse(160, 280, 200, 200);

  ellipse(430, 280, 200, 200);

  ellipse(700, 280, 200, 200);


  var twoPI = PI * 2;
  strokeWeight(8);
  stroke(255, 203, 0);
  noFill();
  let end1 = map(hr % 12, 0, 12, 0, twoPI);
  arc(160, 280, 200, 200, 0, end1);

  stroke(255, 71, 0);
  let end2 = map(mn, 0, 60, 0, twoPI);
  arc(430, 280, 200, 200, 0, end2);

  stroke(255, 20, 0);
  let end3 = map(sc, 0, 60, 0, twoPI);
  arc(700, 280, 200, 200, 0, end3);



  fill(255);
  noStroke();
  textSize(50);
  text(hr % 12, 130, 300);
  text(mn, 405, 300);
  text(sc, 675, 300);


  fill(255);
  noStroke();
  textSize(30);
  text('Hour', 130, 450);
  text('Minute', 387, 450);
  text('Second', 650, 450);

}

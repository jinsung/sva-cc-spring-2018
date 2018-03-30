
function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(200);
  var v1 = createVector(mouseX - width/2, mouseY - width/2);
  stroke(0);
  fill(0);

  v1.setMag(100);

  push();
  translate(width/2, height/2);
  line(0, 0, v1.x, v1.y);
  pop();

  rect(0, 0, v1.mag(), 10);
}

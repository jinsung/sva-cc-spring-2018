
function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(27, 161, 226);
  var v1 = createVector(mouseX, mouseY);

  //translate(width/2, height/2);
  line(0, 0, v1.x, v1.y);



  rect(0, 0, v1.mag(), v1.heading() * 100);


}

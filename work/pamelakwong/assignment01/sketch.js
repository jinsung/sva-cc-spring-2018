function setup() {
  createCanvas(500,500);
  background(200);
}

function draw() {
  noStroke();
  fill(mouseX * 0.7);

  var space = 20;

  for (var circleX = 0; circleX < width; circleX = circleX + space) {
    for (var circleY = 0; circleY < height; circleY = circleY + space) {

      ellipse(mouseY, mouseX, 50, 50);
      ellipse(mouseY, mouseY, 80, 80);
        counter = counter + 1;
    }
  }

}

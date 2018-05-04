function setup() {
  createCanvas(500, 500);
  background(200);
}

function draw() {

  var color = 255;

  var circleSize = 10;
  var circleSpace = 10;
  for (var circleY = 0; circleY <= height; circleY += circleSpace) {
    for(var circleX = 0; circleX <= width; circleX += circleSpace) {
      noStroke();
      ellipse(circleX, circleY, circleSize, circleSize);
      fill(0, 0, 255 - circleY);
    }
  }

  for (var circleY = 0; circleY <= 300; circleY += circleSpace) {
    for(var circleX = 0; circleX <= 100; circleX += circleSpace) {
      noStroke();
      ellipse(circleX, circleY, circleSize, circleSize);
      fill(0, 0, 255 - circleX);
    }
  }

    for (var circleY = 0; circleY <= 400; circleY += circleSpace) {
      for(var circleX = 0; circleX <= 100; circleX += circleSpace) {
        noStroke();
        ellipse(circleX, circleY, circleSize, circleSize);
        fill(0, 0, 255 - circleX);
      }
    }


    noStroke();
    ellipse(mouseX, mouseY, circleSize, circleSize);
    fill(0, 0, 255 - circleX);



    rect(width/2, height/2, 400, height);
    fill(255, 0, 0);
    rect(200, 200, 50, 50);

    text('Make the circles blue', 400, 400);
    textAlign(CENTER);
}

var ps

var bgCircle ={
  x:1,
  xSpeed:10.5,
  y:2,
  ySpeed:14,
  size:20,
};

var circle = {
  size:25
}

var square ={
  x:0,
  y:0,
  size:50,
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  ps = new ParticleSystem();

}

function draw() {

  r = map(bgCircle.x, 0, windowWidth, 0, 255);
  g = map(bgCircle.y, 0, windowHeight, 0, 255);
  b = map(mouseY, 0, 500, 0, 255);
  background(r, g, 150);

  //cursor
  fill(255);
  ellipse(mouseX,mouseY,circle.size, circle.size);
  noCursor();

  //This makes circle bounce
  bgCircle.x += bgCircle.xSpeed
  bgCircle.y += bgCircle.ySpeed

  if (bgCircle.x < 0 || bgCircle.x > width) {
    bgCircle.xSpeed = bgCircle.xSpeed * -1;
  }

  if (bgCircle.y < 0 || bgCircle.y > height) {
    bgCircle.ySpeed = bgCircle.ySpeed * -1;
  }

  //bouncing circle
  noFill();
  noStroke();
  ellipse(bgCircle.x, bgCircle.y, bgCircle.size, bgCircle.size);

  for (square.x = 0; square.x <= width; square.x += 50 ){
    for (square.y = 0; square.y <= width; square.y += 50 ){
      if (square.x - 0 < mouseX && square.x + 50 > mouseX && square.y - 0 < mouseY && square.y + 50 > mouseY) {
        fill(0,0,0,0);
      }  else if (fill(35));
      if (mouseIsPressed){
        noFill();
        circle.size = 55;
      } else {
        circle.size = 15;
      }
      rect (square.x, square.y, square.size, square.size);
    }
  }


  noStroke();
  ps.update();
  ps.display();
  if (isMousePressed){
    ps.addParticles(20, createVector(mouseX, mouseY));
  }
}

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

var mousePositions = [];
var numOfMousePos = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ps = new ParticleSystem();

}

function draw() {
  // add 10 previous mouse positions.
  mousePositions.unshift(createVector(mouseX, mouseY));
  if(mousePositions.length > numOfMousePos) {
      mousePositions.pop();
  }

  r = map(bgCircle.x, 0, windowWidth, 0, 255);
  g = map(bgCircle.y, 0, windowHeight, 0, 255);
  b = map(mouseY, 0, 500, 0, 255);
  background(r, g, 150);

  if (mouseIsPressed){
    noFill();
    circle.size = 55;
  } else {
    background(35);
    circle.size = 15;
  }
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

  for (square.x = 0; square.x <= width; square.x += square.size ){
    for (square.y = 0; square.y <= height; square.y += square.size ){
      for (var i = 0; i < mousePositions.length; i++) {
        var mPos = mousePositions[i];
        if (square.x - 0 < mPos.x &&
            square.x + 50 > mPos.x &&
            square.y - 0 < mPos.y &&
            square.y + 50 > mPos.y) {
          fill(r, g, 150, (1-i/mousePositions.length) * 255);
          rect (square.x, square.y, square.size, square.size);
        }
      }
    }
  }

  if (mouseIsPressed){
    noFill();
    circle.size = 55;
  } else {
    circle.size = 15;
  }

  //cursor
  fill(255);
  ellipse(mouseX,mouseY,circle.size, circle.size);
  noCursor();

  noStroke();
  ps.update();
  ps.display();
  if (isMousePressed){
    ps.addParticles(20, createVector(mouseX, mouseY));
  }
}

var circle ={
  x:1,
  xSpeed:10.5,
  y:2,
  ySpeed:14,
  size:20,
};

var square ={
  x:0,
  y:0,
  size:50,
};


function setup() {
  createCanvas (windowWidth, windowHeight);
}

function draw() {
  //color
  r = map(circle.x, 0, windowWidth, 0, 255);
  g = map(circle.y, 0, windowHeight, 0, 255);
  b = map(mouseY, 0, 500, 0, 255);
  background(r, g, 150);

  noCursor();

  //This makes circle bounce
  circle.x = circle.x + circle.xSpeed
  circle.y = circle.y + circle.ySpeed

  if (circle.x < 0 || circle.x > width) {
    circle.xSpeed = circle.xSpeed * -1;
  }

  if (circle.y < 0 || circle.y > height) {
    circle.ySpeed = circle.ySpeed * -1;
  }

  //bouncing circle
  noFill();
  noStroke();
  ellipse(circle.x, circle.y, circle.size, circle.size);


  //Mouse Circle
  fill(255);
  ellipse(mouseX,mouseY,25,25);

  rectMode(CORNER);
  noStroke();
  fill(0);

  for (square.x = 0; square.x <= width; square.x += 50 ){
    for (square.y = 0; square.y <= width; square.y += 50 ){
      if (square.x - 0 < mouseX && square.x + 50 > mouseX && square.y - 0 < mouseY && square.y + 50 > mouseY) {
        fill(0,0,0,0);
      }  else if (fill(0));
      if (mouseIsPressed){
        noFill();
      }
      rect (square.x, square.y, square.size, square.size);
    }
  }
}

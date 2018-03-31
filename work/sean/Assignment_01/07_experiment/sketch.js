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

var squareOpacity
var squareOpacitySpeed

function setup() {
  createCanvas (500, 500);
  squareOpacity = 0;
  squareOpacitySpeed = 1;
}

function draw() {
  //color
  r = map(circle.x, 0, 500, 0, 255);
  g = map(circle.y, 0, 500, 0, 255);
  b = map(mouseY, 0, 500, 0, 255);
  background(r, g, 150);

  fill(255);
  ellipse(mouseX,mouseY,25,25);

  //noCursor();

  /*
  fill(255);
  rect (square.x, square.y, square.size, square.size);
    if(square.x - 25 < mouseX && square.x + 25 > mouseX && square.y - 25 < mouseY && square.y + 25 > mouseY) {
      var squareDiff = square.size - random(70);
      square.size = square.size - squareDiff * 0.1;
    } else if (fill(240)){

      };
  */


  rectMode(CORNER);
  noStroke();
  fill(0);
  squareOpacity = squareOpacity + squareOpacitySpeed

  for (square.x = 0; square.x <= width; square.x = square.x + 50 ){
    for (square.y = 0; square.y <= width; square.y = square.y + 50 ){
      if (square.x - 0 < mouseX && square.x + 50 > mouseX && square.y - 0 < mouseY && square.y + 50 > mouseY) {
        fill(0,0,0,0);
      }
      else if (fill(240));
      rect (square.x, square.y, square.size, square.size);
    }
  }






  /*
  fill(255);
  for (square.x = 0; square.x < width; square.x = square.x + 25 ){
    for (square.y = 0; square.y < height; square.y = square.y + 25 ){
      rect (square.x, square.y, square.size, square.size);
    } if(square.x - 25 < mouseX && square.x + 25 > mouseX && square.y - 25 < mouseY && square.y + 25 > mouseY) {
        fill(255,0,0);
      }
    //else if (fill(255));
  }
  */


  //This makes square invisible when mouse is in the square.
  /*
  noStroke();
  rect(square.x, square.y, square.size, square.size);


  fill(255);
  if(square.x - 25 < mouseX && square.x + 25 > mouseX && square.y - 25 < mouseY && square.y + 25 > mouseY) {
    noFill();
  }

  noStroke();
  rectMode(CENTER);
  rect(square.x, square.y, square.size, square.size);
  */

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

  //mouse circle
  //fill(0);
  //stroke(0);
  //ellipse(mouseX, mouseY, circle.size, circle.size);


}

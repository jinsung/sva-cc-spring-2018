//Setting up the Canvas
function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 100);
}

function draw() {
  //This allows to redraw the circles.
  background(200);

  //This is setting up the starting point.
  var x = width/2;
  var y = height/2;

  //This is setting up the number of ellipses.
  var numOfCircles = mouseX;

  //This is the size of ellipses.
  var size = 100;

  //noStroke();

  //If i is less than mouseX(numOfCircles), i= i+1
  for (var i=0; i<numOfCircles; i+=1) {
    var zeroToOne = i/numOfCircles;

    //stroke(r,g(0/mouseX),b,a)
    //fill(r,g(0/mouseX),b,a)
    stroke( 30 + i/numOfCircles * 50, 100, 50)
    fill(30 + i/numOfCircles * 50, 60, 80);

    //Math...
    var angle = zeroToOne * (Math.PI * (mouseY * 0.1));
    var spiralSize = 10 + i;

    //Math2...
    x = width / 2 + Math.cos(angle) * spiralSize;
    y = height / 2 + Math.sin(angle) * spiralSize;

    //This is ellipse info
    ellipse(x, y, size, size);
  }
}

var circle ={
  x:1,
  y:200,
  size:10,
};

//var circleX = 1;
//var circleSize = 5;

function setup() {
  createCanvas (600,250);

}

function draw() {
  r = map(mouseX, 0, 600, 0, 255);
  g = map(mouseY, 0, 250, 0, 255);
  //b = map(mouseY, 0, 600, 0, 255);

  background(r, g, 150);

  ellipse(width/2, height/2, circle.size, circle.size);
  ellipse(mouseX, mouseY, circle.size, circle.size);

  //circle.x = circle.x + 1;
  line(width/2, height/2, mouseX, mouseY);

  console.log("circle")
}

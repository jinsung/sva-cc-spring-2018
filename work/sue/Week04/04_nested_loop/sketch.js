function setup () {
  createCanvas(500, 500);

}

function draw() {
  background(200);

  fill(255);
  var space = 20
  var circleSize = 10

  for ( var circleX = 0; circleX < width; circleX = circleX + space) {
    for ( var circleY = 0; circleY < height; circleY = circleY + space) {
      ellipse(circleX, circleY, circleSize, circleSize);
    }
  }

//console.log(counter);

}



/*
for (var X = 0; X < width; X = X +10) {
  for (var Y = 0; Y < height; Y = Y + 10) {
  ellipse (X, Y, size, size);
  }

console.log ("Hello")
}
*/

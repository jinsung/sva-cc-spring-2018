function setup () {
  createCanvas(500, 500);
}

function draw(){
  background(200);

  fill(255,mouseX,mouseY);
  var space=30
//why does everything work so well without var?

  for ( var circleX = 0; circleX < width; circleX = circleX + space){
    for ( var circleY = 0; circleY < height; circleY = circleY +space){
    ellipse(circleX,circleY,mouseX,mouseY);
  }
 }


}

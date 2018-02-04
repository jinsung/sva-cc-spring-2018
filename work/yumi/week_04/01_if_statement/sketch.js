var circleX = 0;

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);


}

function draw(){
  background(0);
  fill(255, 255, 255);

  if(circleX - 25 < mouseX && circleX + 25 > mouseX){
    fill(0, 0, 255);
  } else if(circleX < mouseX){
    circleX = circleX + 1;
  } else {
    circleX = circleX - 1;
  }
    ellipse(circleX, height/2, 50, 50);
}

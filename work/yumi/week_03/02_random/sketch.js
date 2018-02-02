var randomNumX;
var randomNumY;
//var randomNumC;

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);

}
function draw(){

  randomNumX = random(width);
  randomNumY = random(height);

  noStroke();
  fill(random(0, 255),random(0, 255),random(0, 255), 150 );
  ellipse(randomNumX, randomNumY, 10,10);
}

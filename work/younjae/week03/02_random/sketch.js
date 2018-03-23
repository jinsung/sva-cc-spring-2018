var myRandomNumX;
var myRandomNumY;

var myRandomNumR

function setup() {
  createCanvas(500, 500);
  background(200);
}

function draw() {
 myRandomNumX = random(width);
 myRandomNumY = random(height);
 myRandomNumR = random(255);

 noStroke();
 stroke(2, 0, 0, 100)
 fill(myRandomNumR, 0, 100, 100);
 ellipse(myRandomNumX, myRandomNumY, 80, 80);

}

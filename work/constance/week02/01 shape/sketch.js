var X=0;
var Y=0;

function setup() {

  createCanvas(1000,750);
  background(197,255,3);

}

function draw() {

  stroke(255,0,127);
  //noStroke(0);
  fill(255,51,255,50);


  X=X+0.5

  ellipse(mouseX,mouseY,X,X);

  //Y=Y+5
//fill(200,51,200,50)
//  ellipse(mouseX,mouseY,Y,X);

  if (mouseIsPressed) {
      background(197,255,3);



    }


}

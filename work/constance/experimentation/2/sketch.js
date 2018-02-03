var b=0

function setup(){

  createCanvas(400,600);


}

function draw(){

  background(11,250,139);

  ellipse(mouseX,mouseY,50,50);

  stroke(255);
  strokeWeight(6);
  strokeJoin(ROUND);
  noFill(0);

  //if(mouseX>width/2){
    //triangle(mouseX,mouseY,50,60,100,200);

//  }

    if(mouseX>width/2){
      fill(255,random(149),random(140));
      noStroke(0);

    }
b=b+0.5

    if(mouseY<height/2){
      ellipse(mouseX,mouseY,b,b);
    }


}

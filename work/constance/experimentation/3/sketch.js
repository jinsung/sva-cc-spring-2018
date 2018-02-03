var col={
r:255,
g:6,
b:56
}

var circle={
  x:300,
  y:300,
  d:100
};




function setup(){

  createCanvas(600,600);
  //background(0);
}

function draw(){
background(0);

/*
fill(col.r,col.g,col.b);
noStroke(0)
triangle(width/2,20,width/2+20,60,width/2+40,20);
arc(310,20,20,20,PI,TWO_PI);
arc(330,20,20,20,PI,TWO_PI);

*/

  noFill(0);
  stroke(col.r,col.g,col.b);
  strokeWeight(12);
  ellipseMode(CENTER);
  //ellipse(circle.x,circle.y,circle.d,circle.d);



  if(mouseY>height/2){
    circle.d=circle.d+1


  }

  if(mouseY<height/2){
    circle.d=circle.d-1
  }

  if(circle.d>width){
    circle.d=circle.d-1
  }

  if(circle.d<1){
    circle.d=circle.d+1
  }


    //col.b=col.b/2

    if(mouseIsPressed){
      rectMode(CENTER);
      fill(random(255),random(50),random(200))
      noStroke();
rect(circle.x,circle.y,circle.d,circle.d);

}else{
  ellipse(circle.x,circle.y,circle.d,circle.d);


}
}


/*
function heart(x,y){
  push();
  translate(x,y);
  fill(255,6,99);
  noStroke(0);
  triangle(0,20,20,60,40,20);
  arc(10,20,20,20,PI,TWO_PI);
  arc(30,20,20,20,PI,TWO_PI);

  pop();

}
*/

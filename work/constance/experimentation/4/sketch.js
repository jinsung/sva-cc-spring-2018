var dot={
  x:100,
  y:50,
  d:24
};

var col={
  r:250,
  g:0,
  b:0
};

function setup(){
createCanvas(1000,700);
background(0);

}

function draw(){

  dot.x=random(0,width);
  dot.y=random(0,height);
  dot.d=random(20,100);

fill(col.r,col.g,col.b);
ellipse(dot.x,dot.y,dot.d,dot.d);

if(mouseX<width/2){
  col.r=random(0,250);
  col.b=random(150,250);
}
if (mouseX>width/2){
  col.g=random(0,250);
  col.r=random(0,50);

}


}



function mousePressed(){
  background(0);
}

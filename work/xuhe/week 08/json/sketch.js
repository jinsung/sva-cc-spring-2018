var ball1;

function setup(){
  createCanvas(500,500);


  ball1 = {
   x:100,
   y:100,
   size:10
 };
}

function draw(){
  background(0,0,255);
  ellipse(ball1.x,ball1.y,ball1.size,ball1.size);

}

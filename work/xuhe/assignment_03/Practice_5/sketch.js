let x = 0;
let y = 0;
let space = 20;
let colorchange = 230;
// how to make the background color change?


function  setup(){
  createCanvas(500,500);
  background(0);
  fill(0,0,255);
  rect(0,0,500,500);
}

function draw(){


  stroke(255);
  strokeWeight(1);
  // what does random(1)<0.5 mean?
  if(random(1)<0.5){
    line(x, y , x + space, y + space);
  } else {
    fill(0,0,255);
    line( x , y + space, x + space , y);
  }
x = x + space;
if (x > width){
  x = 0;
  y = y + space;
}

}

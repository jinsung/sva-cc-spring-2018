var angle = 0;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  rectMode(CENTER);
}


function draw() {
   background(255);
   translate(100, 100);
   rotate(angle);

   rect (0, 0, 100, 100);
  // angle = angle + 1;
   rect (0, 0, 100, 100, 20, 20, 20, 20);
   rect (0, 0, 50, 50, 20, 20, 20, 20);
   rect (0, 0, 30, 50, 20, 20, 20, 20);
   angle = angle + 1;


}

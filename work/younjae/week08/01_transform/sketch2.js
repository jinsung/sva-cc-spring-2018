var angle;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  rectMode(CENTER);
  angle = 0;
}


function draw() {
  background(200);

  push();
  translate(100, 100);
  //registration=translate
  rotate(angle);
  scale(2, 3);
  //scale(2(weight), 3(height));
  //scale size (2)=200% bigger
  rect (0, 0, 50, 50);
  pop();

  push();
   translate (200, 200);
   translate ( 100, 100 );
   rect ( 0, 0, 10, 10 );
  pop();

  angle = angle + 1;

}

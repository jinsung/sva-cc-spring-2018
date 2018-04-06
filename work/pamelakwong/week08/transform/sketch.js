var angle;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
  angle = 0;
}


function draw() {
   background(200);

   // //push and pop = start and end
   // push();
   //   translate(100, 100);
   //   //rotate(angle);
   //   scale(2, 3);
   //   rect(0, 0, 50, 50);
   // pop();
   //
   // push();
   //   translate(200, 200);
   //   translate(100, 100);
   //   rect(0, 0, 10, 10);
   // pop();
   //
   // angle = angle + 1;


   var rectWidth = width;
   translate(width/2, height/2);
   var numOfRect = 50;

   for(var i = 0; i < numOfRect; i = i + 1){
     push();
     var fi = i / numOfRect;
     rotate(fi * mouseY * mouseX);
     fill(fi * 200, fi * mouseY, fi * mouseX);
     rect(0, 0, rectWidth, rectWidth);
     rectWidth = rectWidth - 10;
     pop();
   }

   rect(0, 0, rectWidth, rectWidth);
}

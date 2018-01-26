var circleX=0;
var circleY=700;
var circleA=600;


function setup() {
  createCanvas(1000,700);

  background(220,40,210);
}



function draw() {

 //circle
   fill(random(250),random(200),200);
   ellipse(circleX,circleX,circleX,circleX);

   circleX=circleX+5

//secondcircle
   fill(random(250),random(20),random(200),100);
   ellipse(200,circleY,circleY,circleY);

   circleY=circleY-6

   //third circle

   //fill(250,random(200),random(200));
   //ellipse(circleA,circleX,circleY,circleX);

   circleA=circleA+6

   //square
   //rect(400,400,circleA,circleA);


}

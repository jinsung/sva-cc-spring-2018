function setup () {
  createCanvas(700,420);

}


function draw(){
  background(255);


  noStroke();
  fill(0, 125, 255);
  rect(325,30*mouseY*0.005, 50,185*mouseY*0.005);

  triangle(350, 270*mouseY*0.005, 300, 180*mouseY*0.005, 400,180*mouseY*0.005);
  fill(0, 125, 255, 30);
  rect(0,0, 1000,180*mouseY*0.005);
  rect(0,0, 1000,150*mouseY*0.005);
  rect(0,0, 1000,120*mouseY*0.005);
  rect(0,0, 1000,90*mouseY*0.005);
  rect(0,0, 1000,60*mouseY*0.005);
  rect(0,0, 1000,30*mouseY*0.005);

  fill(255, 125, 0);
  var yPosition = 400;
  var yPositionBottom = yPosition + 60;
  var yMousePosMult = -1;
  triangle(175, yPosition + mouseY * yMousePosMult,
           125, yPositionBottom + mouseY * yMousePosMult,
           225, yPositionBottom + mouseY * yMousePosMult);
  rect(150, yPositionBottom + mouseY * yMousePosMult, 50, yPositionBottom + mouseY * yMousePosMult + 400);

  triangle(525, yPosition + mouseY * yMousePosMult,
           475, yPositionBottom + mouseY * yMousePosMult,
           575, yPositionBottom + mouseY * yMousePosMult);
  rect(500, yPositionBottom + mouseY * yMousePosMult, 50, yPositionBottom + mouseY * yMousePosMult + 400);

  //rect(500,340*mouseY*0.005, 50,400*mouseY*0.005+420);
  fill(255, 125, 0, 30);
  rect(0,420, 1000,30*mouseY*-0.005);
  rect(0,420, 1000,60*mouseY*-0.005);
  rect(0,420, 1000,90*mouseY*-0.005);
  rect(0,420, 1000,120*mouseY*-0.005);
  rect(0,420, 1000,150*mouseY*-0.005);
  rect(0,420, 1000,180*mouseY*-0.005);


}

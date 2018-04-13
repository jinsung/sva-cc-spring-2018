/*Name: Pamela Kwong
  Date: 20180407
  Project: This class indicates the current second.

  Current Problems and solutions:
  Create a new js file and create an array
  to indicate the specific seccond.

*/

var canvasArea;
var areaOfSquare;
var squareWidth;
var h;
var m;
var s;

function setup() {
  createCanvas(1000, 1000);
  canvasArea = width * height;


  //7200 = # of squares
  areaOfSquare = canvasArea/1440;
  squareWidth = Math.sqrt(areaOfSquare);

  //number of squares in each row
  console.log(width/squareWidth);

  //number of squares in each column
  console.log(height/squareWidth);

}

function time() {
  h = hour();
  m = minute();
  s = second();
}

function convertToMinutes(){
  //convert hours to seconds
  h = h * 60;
  //convert minutes to seconds
  m = m + h;
}

function drawMinutesBoxes(){

  for (var x = 0; x < width; x = x + squareWidth){
    for (var y = 0; y < height; y = y + squareWidth){
      rect(x, y, squareWidth, squareWidth);
    }

  }
  fill(0, 255, 255);
}

function colorMinutesBoxes(){
//  console.log(m);
  //divisible by 38 which is the number of squares
  //in each column and in each row
  //then color x number of drawMinutesBoxes

  //if not divisible by 38
  //round up the number
  //subtract the number and fill in the rest of the row

  

}




function draw() {
   background(200);

   drawMinutesBoxes();
   time();
  // console.log(h, m);
   convertToMinutes();
   colorMinutesBoxes();
   console.log(Math.round(m/(width/squareWidth)));
}

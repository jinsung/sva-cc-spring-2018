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


  //86400 seconds = # of squares
  areaOfSquare = canvasArea/86400;
//  console.log(areaOfSquare);

  squareWidth = Math.sqrt(areaOfSquare);
//  console.log(squareWidth);

  //number of boxes in each row
//  console.log(width/squareWidth);
  //number of boxes in each column
//  console.log(height/squareWidth);
  //console.log(width/squareWidth * height/squareWidth);


}

function time() {
  h = hour();
  m = minute();
  s = second();
}

function convertToSeconds(){
  //convert hours to seconds
  h = h * 60 * 60;
  //convert minutes to seconds
  m = m * 60;
  // add all the seconds
  s = s + h + m;
//  console.log(s);
}

function drawSecondsBoxes(){

  for (var x = 0; x < width; x = x + squareWidth){
    for (var y = 0; y < height; y = y + squareWidth){
      rect(x, y, squareWidth, squareWidth);
    }

  }
  fill(0, 255, 255);
}

function subtractSecondsBoxes(){
  //seconds = # of boxes
  //multiply seconds with the area of ONE square
  // areaOfSeconds = s * areaOfSquare;

  //fill the boxes
  //need to get the height that it will fill up to
  //need to get the width that it will fill up to

  //or assign the seconds to the rect[i]
  //current second is blue

  //calculate the width
  var subtractWidth = s * squareWidth;
  //calculate the height
  var subtractHeight = s * squareWidth;

  for (var x = subtractHeight; x >= 0; x = x - squareWidth){
    for (var y = subtractHeight; y >= 0; y = y - squareWidth){
      rect(x, y, squareWidth, squareWidth);
    }
    fill(255);
  }


//  console.log(areaOfSeconds);
}




function draw() {
   background(200);

   drawSecondsBoxes();
   time();
//   console.log(h, m, s);
   convertToSeconds();
//   console.log(s);
  subtractSecondsBoxes();

}

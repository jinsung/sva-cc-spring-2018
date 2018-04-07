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

  var rectangles = [];

  for (var x = 0; x < width; x = x + squareWidth){
    for (var y = 0; y < height; y = y + squareWidth){
      rect(x, y, squareWidth, squareWidth);
    }
  }
  //need to get the number of seconds
  //multiply seconds with the area of ONE square

  //fill the boxes
  //need to get the height that it will fill up to
  //need to get the width that it will fill up to

  //or assign the seconds to the rect[i]
  //current second is blue
  var areaOfSeconds = s * areaOfSquare;

  console.log(areaOfSeconds);

}




function draw() {
   background(200);

   drawSecondsBoxes();
   time();
//   console.log(h, m, s);
   convertToSeconds();
//   console.log(s);

}

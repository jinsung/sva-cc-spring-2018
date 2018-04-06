var myArray = [40, 50, 60, 80];
var myString = "Hello World!"; //string is list of characters

var myEmptyArray = [];

function setup() {
  createCanvas(500, 500);
  for (var i = 0; i < myString.length; i++) {
    myEmptyArray[i] = {x: 10, y: 10};
    console.log(i + " " + myEmptyArray[i]);
  }

}

function draw() {
  background(200);

}

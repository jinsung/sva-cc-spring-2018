var myNums = [30, 50, 60, 70, 90];
var myString = "Hello World!";
var myString2 = ['H','e'];

var myEmptyArray = [];

function setup() {
  createCanvas(500, 500);
  for (var i = 0; i < myString.length; i++){
    myEmptyArray[i] = myString[i];
    //myEmptyArray[i] = {x:10, y:10};
    console.log(i + " " + myEmptyArray[i]);
  }

}


function draw() {
   background(200);


}

var myArray = [40, 50, 60, 80];
var myString = "Hello World!";

function setup() {
  createCanvas(500, 4500);
  for (var i = 0; i < myString.length; i++) {
    console.log(i + "" + myString[i]);
  }
}

function draw() {
  background(200);

}

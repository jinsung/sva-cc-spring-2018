var myArray = [10, 20, 40, 20, 3, 10];

function setup() {
  createCanvas(500, 500);
  var sum = 0;
  var average = 0;
  myArray[4] = 80;
  for (var i = 0; i < myArray.length; i++ ) {
    sum = sum + myArray[i];
  }
  average = sum / myArray.length;
  console.log(sum);
  console.log(average);
}

function draw() {
  background(200);

}

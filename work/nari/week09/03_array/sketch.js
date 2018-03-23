var myArray = [100, 90, 50, 80, 3, 80];

function setup() {
  createCanvas(500, 500);
  var sum = 0;
  var average = 0;
  //arrays are counted from 0, so the 5th item on the list will be array[4]
  myArray[4] = 80;
  for (var i = 0; i < myArray.length; i++) {
    sum = sum + myArray[i];
  }

  average = sum / myArray.length;
  console.log(sum);
  console.log(average);
}

function draw() {
  background(0);

}

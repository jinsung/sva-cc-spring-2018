var myArray = [100, 90, 50, 80, 3, 80];

function setup() {
  createCanvas(500, 500);
  //i++;
//  i = i +1;
  var sum = 0;
  var average = 0;
  myArray[4] = 80;
  for (var i = 0; i< myArray.length; i++ ) {
    console.log(myArray[i]);
    sum = sum + myArray[i];
  }
  average = sum / myArray.length;
  console.log(sum);
  console.log(average);


}

function draw() {
  background(200);

}

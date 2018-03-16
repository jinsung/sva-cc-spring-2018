function setup() {
  createCanvas(500, 500);
  var myList = [1, 3, "five", 7.0, 11];

  myList[1] = "E";
  
  console.log("myList: " + myList);
  console.log("Number of items in my list: " + myList.length);

  console.log("What is item nunber 2: " + myList[2]);

  for (var i=0; i<myList.length; i++) {
    console.log( "What is item number " + i + ": " + myList[i]);
  }
}

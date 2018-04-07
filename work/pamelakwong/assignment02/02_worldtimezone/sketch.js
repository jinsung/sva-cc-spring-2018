var h;
var m;
var s;
var londonh;
var japanh;


function setup() {
  createCanvas(720, 800);

}

function updateTime() {
  h = hour();
/*  if (h > 12){
    h = h - 12;
  }*/
  m = minute();

  s = second();

}

function displayTimeZones(){
  //number of rectangles

  for (var i = width; i >= 0; i = i - width/24){
    rect(i, 0, width/24, height);

    //how to decrease the color from left to right
    //piano or domino effect?
    fill(0, 0, 255);
  }
}


function draw() {
   background(200);
   displayTimeZones();
   updateTime();


}

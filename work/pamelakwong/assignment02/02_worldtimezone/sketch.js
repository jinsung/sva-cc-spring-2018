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

  for (var i = 0; i < width; i = i + width/24){
    rect(i, 0, width/24, height);
    fill(0, 0, mouseY-255);
  }
}


function draw() {
   background(200);
   displayTimeZones();
   updateTime();

//   displayClockBar();


}

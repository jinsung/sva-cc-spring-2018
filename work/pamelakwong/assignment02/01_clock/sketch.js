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

//displays time in New York
function displayEasternTimeZone(){
  textFont('Courier');
  textSize(30);
  fill(0, 0, 210);
  text('New York. ' + h + ': ' + m + ': ' + s, 50, 50);


}

//displays time in London
function displayGreenwichMeanTimeZone(){
  textFont('Courier');
  textSize(30);
  fill(0, 0, 210);
  londonh = h + 5;
  textLeading(30);
  text("\n" + 'London. ' + londonh + ': ' + m + ': ' + s, 50, 50);

}

//displays time in Japan
function displayJapanTimeZone(){
  textFont('Courier');
  textSize(30);
  fill(0, 0, 210);
  japanh = h - 11;
  textLeading(60);
  text("\n" + 'Japan. ' + japanh + ': ' + m + ': ' + s, 50, 50);
}

function displayClockSquares () {
    //rect(x, y, widthsize, lengthsize)
    //displays 24 rectangles
    // width/30 = numberofSquares

    //width of the total hour squares
    var numberOfSquares = h * 30;

    var rectArray = [];
    for (var i = 0; i < width; i = i + 30) {
      rectArray[i] = rect(i, 200, 30, 30);
    }
    for (var i = 0; i < width; i = i + 30) {
      rectArray[i] = rect(i, 230, 30, 30);
    }

    for (var i = 0; i < width; i = i + 30) {
      rectArray[i] = rect(i, 260, 30, 30);
    }
    //console.log(numberOfSquares);
}

function displayNYClockHours(h) {
  for (var i = -30; i < h * 30; i = i + 30) {
    if (mouseIsPressed){
      rect(i, 200, 30, 30);
      fill(0, i, 0);
    }

  }
}

function displayLondonClockHours(londonh) {
  for (var i = -30; i < londonh * 30; i = i + 30) {
    if (mouseIsPressed){
      rect(i, 230, 30, 30);
      fill(0, i, 0);
    }

  }
}

function displayJapanClockHours(japanh) {
  for (var i = -30; i < japanh * 30; i = i + 30) {
    if (mouseIsPressed){
      rect(i, 260, 30, 30);
      fill(0, i, 0);
    }

  }
}

function moveSquares(){
    rect(i, 230, 30, 30);
}
/*
    1 am
    rect(30, 200, 30, 30);
    2 am
    rect(60, 200, 30, 30);
    3 am
    rect(90, 200, 30, 30);
    4 am
    rect(120, 200, 30, 30);

    rect(150, 200, 30, 30);
    rect(180, 200, 30, 30);
    rect(210, 200, 30, 30);
    rect(240, 200, 30, 30);
    rect(270, 200, 30, 30);
    rect(300, 200, 30, 30);
    11 am
    rect(330, 200, 30, 30);

    12 pm
    rect(360, 200, 30, 30);
    1pm
    rect(390, 200, 30, 30);
    2pm
    rect(420, 200, 30, 30);

    rect(450, 200, 30, 30);
    rect(480, 200, 30, 30);
    rect(510, 200, 30, 30);
    rect(540, 200, 30, 30);
    rect(570, 200, 30, 30);
    rect(600, 200, 30, 30);
    rect(630, 200, 30, 30);
    rect(660, 200, 30, 30);

    11pm
    rect(690, 200, 30, 30);
    12am
    rect(720, 200, 30, 30);
    */

    //hours are relative to the number of squares
    //not reached to 24 hours which means the other squres are not filled

    //for loop displays all 24 squares
    //if h = 5 then there are 5 squares
    //else squares no fill



function draw() {
   background(0, 255, 0);
   updateTime();
   displayEasternTimeZone();
   displayGreenwichMeanTimeZone();
   displayJapanTimeZone();
   displayClockSquares();
   displayNYClockHours(h);
   displayLondonClockHours(londonh);
   displayJapanClockHours(japanh);
//   displayClockBar();


}

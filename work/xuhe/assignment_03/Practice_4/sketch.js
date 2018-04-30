var hours;
var minutes;
var seconds = 0;

function setup(){
createCanvas(500,500);
angleMode(DEGREES);
}


function draw(){

background(0,random(0,50));
updateTime();

textSize(38);
textFont('Futura');

drawTextClock();

strokeWeight(10);
stroke(255);
noFill();

beginShape();

let spacing = map(seconds, 0, 59, 0, 60);
for(let a=0; a<360; a=a+spacing){
let x = 100 * sin(a) + 300;
let y = 100 * cos(a) + 250;
vertex(x,y);
//var secondShape  = map(hours, 0, 12, 0, width);
}
endShape(CLOSE);
}



function updateTime() {
  hours = hour();
  if (hours > 12) {
    hours = hours - 12;
  }
  minutes = minute();
  //var sDiff = seconds - second();
  //seconds = seconds - sDiff * 0.1;
  seconds = second();
}


function drawTextClock() {
  fill(255);
  noStroke();
  var textX = 280;
  var textY = 270;
  fill(255,50);
  text(minutes,textX,textY);
  textSize(300);
  fill(255,5);
  text(hours,80,320);
  textSize(100);
  fill(255);
  text(200,260);
}

  // fill(0, 102, 153);
  // textY = textY + 35;
  // text("Minutes: " + minutes,  textX, textY );
  // fill(0, 102, 153, 150);
  // textY = textY + 35;
  // text("Secondes: " + seconds, textX, textY );

var seconds;
var m;
var h;
var randomColor

function setup() {
  createCanvas(500, 500);
  background(30, 30, 30);
  angleMode(DEGREES);
  seconds = 0;


}


function draw() {
  updateClock();
  randomColor= random (255);

  var secondsAngle = map( seconds, 0, 60, 0, 360) - 90;
  var minutesAngle = map( m, 0, 60, 0, 360) - 90;
  var hoursAngle = map( h, 0, 12, 0, 360) - 90;


  translate (width/2, height/2);
  ellipse( 0, 0, width * 0.9, height * 0.9);
  fill( 0, 0, 0);

push();
  strokeWeight( 1 );
  stroke(randomColor);
  rotate(secondsAngle);
  line(0, 0, width/2 * 0.8, 0);
pop();

push();
  strokeWeight( 3 );
  stroke(255, 255, 255);
  rotate(minutesAngle);
  line(0, 0, width/2 * 0.7, 0);
pop();

push();
  strokeWeight( 10 );
  stroke(255, 255, 255);
  rotate(hoursAngle);
  line(0, 0, width/2 * 0.5, 0);
pop();

}

function updateClock(){

  seconds = second();
  h = hour();
  if (h > 12){
    h = h - 12;
  }
  m = minute();
}

function mouseClicked(){
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);

 }

var amp = 0;
var angle = 0;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(240,240,250);
  angle = angle+1/100;
  amp = height*0.4;
  var sec = second();
  var min = minute();
  var hr = hour();
  var x = amp * sin(angle);
  var y = amp * cos(angle);

  var secAngle = map(sec, 0, 60, 0, Math.PI * 2) - Math.PI / 2;

  var secX = 100 * cos(secAngle);
  var secY = 100 * sin(secAngle);

  push();
  noStroke();
  fill(0,50,200);
  ellipse(width/2,height/2,width,height);
  pop();


  push();
  translate(width/2, height/2);
  stroke(random(150, 200), 0, 50, 150);
  strokeWeight(1);
  noFill();
  noStroke();

  fill(250, 50);
  ellipse(x/1.5, (-y)/1.5,220,220);
  fill(250);
  textSize(18);
  text('\n' + sec, x, y-10);
  //textSize(18);
  //text('\n' + min, x, y-60);
  pop();

  push();
  translate(x/1.5+width/2, (-y)/1.5+height/2);
  noStroke();
  fill(250,random(50,60));
  //ellipse(x/1.5,(-y)/1.5,80,80);
  fill(255);
  ellipse(secX, secY, 80, 80);
  pop();

}

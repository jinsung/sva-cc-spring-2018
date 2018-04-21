var amp = 0;
var angle = 0;

function setup() {
  createCanvas(500,500);

}

function draw() {
  background(0);
  // what does 0.0075 mean?
  angle += 0.0075;
  amp = height*0.2;
  var sec = second();
  var min = minute();
  var hr = hour();
  var x = amp * sin(angle);
  var y = amp * cos(angle);
  textSize(18);

// second here
  push();
  translate(width/4, height/4);
  stroke(random(150, 200), 0, 50, 150);
  noStroke();
  fill(0, 0, random(150, 180));
  ellipse(width/4,height/4,x,y);
  pop();

  push();
  translate(width/2, height/2);
  stroke(random(150, 200), 0, 50, 150);
  strokeWeight(1);
  noFill();
  line(0, 0, x, - y);
  noStroke();
  fill(random(150, 200), 0, 50);
  ellipse( x, - y+ 10,50,50);
  text('\n' + min, -x, y+20);
  fill(0,0,random(150, 200));
  text('\n' + sec, x, y+10);
  pop();

  push();
  translate(width/2, height/2);
  stroke(random(150, 200), 0, 50, 150);
  strokeWeight(1);
  noFill();
  line(0, 0, -x, y);
  noStroke();
  fill(random(150, 200),0,50);
  ellipse(-x, y+ 10,20,20);
  pop();


}

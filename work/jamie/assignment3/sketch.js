function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  textAlign(CENTER,CENTER);
  //pixelDensity(1);
  frameRate(60);
  textFont("Source Code Pro, Consolas, monospace");
  background(0);
}
function draw() {
  translate(width/2,height/2);
  strokeCap(SQUARE);
  var d = new Date();
  var milli = d.getMilliseconds();
  var p_milli = milli/1000 + .001;
  var s = d.getSeconds(); //  + p_milli;
  var p_s = s/60 + .001;
  var m = d.getMinutes(); //  + p_s;
  var p_m = m/60 + .001;
  var h = d.getHours(); // + p_m;
  var p_h = h%12/12 + .001;

  background(0);
  noStroke();
  fill(21);
  ellipse(0,0,170,170);
  // text
  fill(196);
  textStyle(BOLD);
  text(("00"+parseInt(h)).substr(-2) + ":" + ("00"+parseInt(m)).substr(-2) + ":" + ("00"+parseInt(s)).substr(-2),0,0);


  // circles


  rotate(-PI/2);
  noFill();
  strokeWeight(8);
  stroke(180,60,160);
  arc(0, 0, 100, 100, 0, p_h*2*PI);

  stroke(180,160,250);
  strokeWeight(6);
  arc(0, 0, 122, 122, 0, p_m*2*PI);

  stroke(60,160,180);
  strokeWeight(4);
  arc(0, 0, 140, 140, 0, p_s*2*PI);

  stroke(80,120,200);
  strokeWeight(2);
  arc(0, 0, 153, 153, 0, p_milli*2*PI);

  // fps
  // rotate(PI/2);
  // if (prevMilli) {
  //   noStroke();
  //   fill(255);
  //   var fps = parseInt(1000/(milli-prevMilli));
  //   text(fps, 100,0);
  // }
  // prevMilli = milli;
}

var prevMilli;

var h = 0;
var s = 0;
var b = 0;

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);

}

function draw(){
background(h, s, b);

  if (mouseX > width/2){
      h ++;
      s --;
      b ++;
    } else {
      h --;
      s ++;
      b --;
  }

  if( h > 360){
    h = 360;
  } else if (h < 0){
    h = 0;
  }

  if(s > 100){
    s = 100;
  } else if (s < 0){
    s = 0;
  }

  if(b > 100){
    b = 100;
  } else if (b < 0){
    b = 0;
  }

  rect(0, height/2, width, height/2);
  fill (0, 0, 0, 35);
  noStroke();

}

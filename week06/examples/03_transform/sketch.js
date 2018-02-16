function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  smooth();
}

function draw() {
  background(255);
  strokeWeight(0.2);
  noFill();
  var numRect = 70;
  var rotAmount = 0.5;

  for (var i = 0; i < numRect; i++) {
    var fi = i/numRect; // variable fi is from 0 to 1.
    var ifi = 1-fi; // this is inverse of fi. variable ifi is from 1 to 0.

    push();
    translate(width/2, height/2);
    var anim = Math.sin(frameCount*0.01);
    rotate( anim * ( PI*rotAmount ) * fi );
    strokeWeight(fi);
    //noStroke();
    fill(0, 255/numRect);
    var size = width/numRect * i;
    scale(ifi);
    rect(0, 0, width, height);
    pop();
  }

}

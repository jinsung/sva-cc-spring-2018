var ps;
var time = 0;




// F = 1 * A


function setup() {
  createCanvas(1680, 900);
  ps = new ParticleSystem();





}

function draw() {
  time = time + 0.03;
  var noiseVal = noise( Math.sin(10), Math.sin(10), time );
  background(255, random(30, 255), random(60, 255));
  var space = 50;
  var circleSize = 40;


    noStroke();
    ps.update();
    ps.display();
    if (isMousePressed) {
      ps.addParticles( 20, createVector(mouseX, mouseY));
    }
  }

/*function mousePressed () {
  ps.addParticles(random(30, 80), createVector(mouseX, mouseY));
}*/

var myParticles;

function setup() {
  createCanvas(500, 500);
  myParticles = [];
  for (var i = 0; i < 100; i++){
    var particle = new Particle(createVector(width/2, height/2));
    particle.applyForce(createVector(random(-10, 10), random(-10, 10) ));
    myParticles.push(particle);
  }

}

function draw() {
  background(200);
  noStroke();
  for(var i = 0; i < myParticles.length; i++){
    var particle = myParticles[i];
    particle.applyForce(createVector(0, 0.15));
    particle.update();
    particle.display();

  }

}

var myAwesomeParticles;
// F = 1 * A


function setup() {
  createCanvas(500, 500);
  myAwesomeParticles = []; //empty array
  for (var i = 0; i < 500; i++ ) {
    var particle = new Particle(createVector(width/2, height/2));
    particle.applyForce(createVector(random(-5, 5), random(-5, 5) ));
    myAwesomeParticles.push( particle ); // you can push the particle one by one 0 to 49
    //myAwesomeParticles[i] = particle; same as line 11.
  }





}

function draw() {
  background(200);
  for (var i = 0; i < myAwesomeParticles.length; i++ ) {
    var particle = myAwesomeParticles[i];
    particle.applyForce(createVector(0, 0.1)); //gravity

    particle.update();
    particle.display();
  }

}

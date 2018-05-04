var myAwesomeParticles;

function setup() {
  createCanvas(500, 500);
  myAwesomeParticles = [ ];
  for ( var i = 0; i < 800; i++) {
   var particle = new Particle(createVector(10, height/2));
   particle.applyForce(createVector( random(-5, 15), random(-2, 2)));
   myAwesomeParticles.push( particle );

 }

}

function draw() {
  background(200);
  for ( var i = 0; i < myAwesomeParticles.length; i++) {
   var particle = myAwesomeParticles[i];
   particle.applyForce(createVector(0, 0.01));
   particle.update();
   particle.display();

 }
}

var myAwesomeParticles;

function setup() {
  createCanvas(500, 500);
  myAwesomeParticles = [ ];
  for ( var i = 0; i < 800; i++) {
   var particle = new Particle(createVector(width/2, height/2));
   particle.applyForce(createVector( random(-10, 10), random(-10, 10)));
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

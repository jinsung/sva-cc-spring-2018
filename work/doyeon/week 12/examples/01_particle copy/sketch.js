var particles;
//F = 1 * A
function setup() {
  createCanvas(500, 500);
  particles = [];
  for ( var i = 0; i < 30; i++ ){
    var particle = new Particle(createVector(width/2, height/2));
    particle.applyForce(createVector( random(-10, 10), random (-10, 10 )));
    particles.push( particle );

  }

}


function draw() {
  background(200);
  for ( var i = 0; i < particles.length; i++ ) {
    var particle = particles[i];
    particle.applyForce(createVector(0,0));
    particle.update();
    particle.display();
  }
}

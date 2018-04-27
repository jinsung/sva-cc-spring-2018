var particle;
/*Newton's law
f = mass * acceleration
mass = 1
f= 1 * A
therefore f = acceleration
*/

function setup() {
  createCanvas(500, 500);
  particle = new Particle(createVector(width/2, height/2));
  //gravity is constantly applied to every frame
  particle.applyForce(createVector(10, 0));
}

function draw() {
  background(200);
  particle.applyForce(createVector(0, 0.1));
  particle.update();
  particle.display();
}

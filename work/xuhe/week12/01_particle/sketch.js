var particle;
//F=1*A


function setup(){
  createCanvas(500,500);
  particle = new Particle(createVector(10,height/2));
  // the force that applying to throw the dot
  particle.applyForce(createVector(10,0));
}


function draw(){
  background(0);
  particle.applyForce(createVector(0,0.1));
  particle.update();
  // gravitity is applying everywhere, it's not one time thing, so I should put
  //it into draw section. apply to every single minutes.
  particle.display();


}

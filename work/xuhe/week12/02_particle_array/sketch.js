var myAwesomeParticles;

function setup(){
  createCanvas(500,500);
  myAwesomeParticles= [];
  for (var i=0;i<500;i++){
    var particle = new Particle(createVector(width/2,height/2));
    particle.applyForce(createVector(random(-10,10),random(-10,10)));
    //myAwesomeParticles[i]=particle;
    myAwesomeParticles.push(particle);
  }
}


function draw(){
  background(0);
  for (var i=0;i< myAwesomeParticles.length;i++){
    var particle= myAwesomeParticles[i];
    particle.applyForce(createVector(0,0.1));
    particle.update();
    particle.display();
  }
}

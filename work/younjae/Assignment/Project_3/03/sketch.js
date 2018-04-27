var particles = [];
var numOfParticle = 300;
var currentParticleIndex = 0;

function setup() {
  createCanvas(1500, 1080);
  colorMode(HSB, 255);
  noStroke();

  for(var i = 0; i < numOfParticle; i ++){
    particles[i] =  new Particle(-200, -200, random(200));
  }
}

function draw() {
  background(0);
  currentParticleIndex ++;
  if(currentParticleIndex >= numOfParticle){
    currentParticleIndex = 0;

  }
  particles[currentParticleIndex].update(mouseX, mouseY);
  for(var i = 0; i < numOfParticle; i ++){
    fill(i/numOfParticle * 255, 150, 250);

    var index = (currentParticleIndex + i) % numOfParticle;
    particles[index].draw();

    textSize(20);
    text('Explore Your Color', 100, 100);
    noStroke();


  }

}

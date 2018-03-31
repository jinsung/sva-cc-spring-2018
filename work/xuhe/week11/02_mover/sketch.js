var mover;

function setup(){
  createCanvas(500,500);
  mover = new Mover();

}


function draw(){


 var gravity= createVector(0,0.2);
 // wind is coming from left to right
 var wind = createVector(0.01,0);
 // apply different forces to multiple objects
 mover.applyForce(gravity);
 mover.applyForce(wind);

  background(0);
  mover.update();
  mover.display();



}

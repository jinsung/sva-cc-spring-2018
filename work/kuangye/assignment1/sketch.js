// center point
var centerX = 0.0, centerY = 0.0;

var radius = 45, rotAngle = -90;
var accelX = 0.0, accelY = 0.0;
var deltaX = 0.0, deltaY = 0.0;
var springing = 0.0009;

//corner nodes
var nodes = 1;

//zero fill arrays
var nodeStartX = new Array();
var nodeStartY = new Array();
var nodeX = new Array();
var nodeY = new Array();
var angle = new Array();
var frequency = new Array();

var offSetX = [[100,100,100,100,100],[0,0,0,0,0],[-100,-100,-100,-100,-100],[-50,-50,-50,-50,-50],[50,50,50,50,50]];
var offSetY = [[100,100,100,100,100],[0,0,0,0,0],[-100,-100,-100,-100,-100],[-50,-50,-50,-50,-50],[50,50,50,50,50]];

var count = 5;

function setup() {
  createCanvas(600, 600);

  //center shape in window
  centerX = width/2;
  centerY = height/2;

  //initialize arrays to 0
  for(var j = 0 ; j < count; ++j){
	  nodeStartX[j] = new Array(nodes);
	  nodeStartY[j] = new Array(nodes);
	  nodeX[j] = new Array(nodes);
	  nodeY[j] = new Array(nodes);
	  angle[j] = new Array(nodes);
	  for (var i=0; i<nodes; i++){
		nodeStartX[j][i] = 0;
		nodeStartY[j][i] = 0;
		nodeX[j][i] = 0;
		nodeY[j][i] = 0;
		angle[j][i] = 0;
	  }
  }

  // iniitalize frequencies for corner nodes
  for(var j = 0 ; j < count; ++j){
	  frequency[j] = new Array(nodes);
	  for (var i=0; i<nodes; i++){
		frequency[j][i] = random(5, 12);
	  }
  }

  noStroke();
  frameRate(20);
}

function draw() {
  // fade background
  fill(0, 100);
  rect(0, 0, width, height);
  drawShape();
  moveShape();
}

function drawShape() {
  // calculate node starting locations
  for(var j = 0 ; j < count; ++j){
	  for (var i = 0; i<nodes; i++){
		nodeStartX[j][i] = centerX+cos(radians(rotAngle))*radius + offSetX[j][i];
		nodeStartY[j][i] = centerY+sin(radians(rotAngle))*radius + offSetY[j][i];
		rotAngle += 360.0/nodes;
	  }
  }

  // draw polygon
  for(var j = 0 ; j < count; ++j){
	  fill(color(random(0,255), random(0,255), random(0,255)));
	  for (var i=0; i<nodes; i++){
		  ellipse(nodeX[j][i], nodeX[j][i], 20, 20);
	  }
  }
  
}

function moveShape() {
  //move center point
  deltaX = mouseX-centerX;
  deltaY = mouseY-centerY;

  // create springing effect
  deltaX *= springing;
  deltaY *= springing;
  accelX += deltaX;
  accelY += deltaY;

  // move predator's center
  centerX += accelX;
  centerY += accelY;

  //move nodes
  for(var j = 0 ; j < count; ++j){
	  for (var i = 0; i < nodes; i++){
		nodeX[j][i] = nodeStartX[j][i]+sin(radians(angle[j][i]))*(accelX*2);
		nodeY[j][i] = nodeStartY[j][i]+sin(radians(angle[j][i]))*(accelY*2);
		angle[j][i] += frequency[j][i];
	  }
  }
}
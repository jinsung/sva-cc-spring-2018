var time = 0;
var myRandomNumX;
var myRandomNumY;


function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 360, 255, 255);
  circleY=250;
  circleX=250;
  circleXspeed=60;
  circleYspeed=35;
}

function draw() {
  background(mouseX,255,255);
  var circleSize = 10;
  var circleSpace = 20;
  time = time + 0.007;
                                                           //this is for gap
  for (var circleY = 0; circleY <= height; circleY = circleY + 200) {
    for(var circleX = 0; circleX <= width; circleX = circleX + 200) {
      //circleSize = random(1, 10);
      //circleSize = (Math.cos(circleX * 0.1) + Math.sin(circleY * 0.1) + 3) * 2;
      //circleSize = (Math.sin(circleY * circleX) + 1.0) * 3.0;
      var noiseVal = noise( circleX * 0.1, circleY * 0.003, time );
      circleSize = noiseVal * 300.0;
      ellipse(circleX+mouseX, circleY-mouseX, circleSize, circleSize);
      fill(0,255,0);
    }
  }
  for (var circleY = 0; circleY <= height; circleY = circleY + 200) {
    for(var circleX = 0; circleX <= width; circleX = circleX + 200) {
      //circleSize = random(1, 10);
      //circleSize = (Math.cos(circleX * 0.1) + Math.sin(circleY * 0.1) + 3) * 2;
      //circleSize = (Math.sin(circleY * circleX) + 1.0) * 3.0;
      var noiseVal = noise( circleX * 0.1, circleY * 0.009, time );
      circleSize = noiseVal * 300;
      fill(0,0,255);
      ellipse(circleX+mouseX, circleY+mouseX, circleSize, circleSize);
    }
  }
  for (var circleY = 0; circleY <= height; circleY = circleY + 100) {
    for(var circleX = 0; circleX <= width; circleX = circleX + 100) {
      //circleSize = random(1, 10);
      //circleSize = (Math.cos(circleX * 0.1) + Math.sin(circleY * 0.1) + 3) * 2;
      //circleSize = (Math.sin(circleY * circleX) + 1.0) * 3.0;
      var noiseVal = noise( circleX * 0.003, circleY * 0.00451, time );
      circleSize = noiseVal * 150.0;
      fill(0,255,0);
      ellipse(circleX-mouseX, circleY-mouseX, circleSize, circleSize);
    }
  }  for (var circleY = 0; circleY <= height; circleY = circleY + 100) {
      for(var circleX = 0; circleX <= width; circleX = circleX + 100) {
        //circleSize = random(1, 10);
        //circleSize = (Math.cos(circleX * 0.1) + Math.sin(circleY * 0.1) + 3) * 2;
        //circleSize = (Math.sin(circleY * circleX) + 1.0) * 3.0;
        var noiseVal = noise( circleX * 0.1, circleY * 0.00451, time );
        circleSize = noiseVal * 150.0;
        fill(0,0,255);
        ellipse(circleX-mouseX, circleY+mouseX, circleSize, circleSize);
      }
    }
    for (var circleY = 0; circleY <= height; circleY = circleY + 25) {
      for(var circleX = 0; circleX <= width; circleX = circleX + 25) {
        //circleSize = random(1, 10);
        //circleSize = (Math.cos(circleX * 0.1) + Math.sin(circleY * 0.1) + 3) * 2;
        //circleSize = (Math.sin(circleY * circleX) + 1.0) * 3.0;
        var noiseVal = noise( circleX * 0.1, circleY * 0.00451, time );
        circleSize = noiseVal * 100.0;
        noFill();
        ellipse(circleX, circleY+mouseX, circleSize, circleSize);
      }
    }
    for (var circleY = 0; circleY <= height; circleY = circleY + 25) {
      for(var circleX = 0; circleX <= width; circleX = circleX + 25) {
        //circleSize = random(1, 10);
        //circleSize = (Math.cos(circleX * 0.1) + Math.sin(circleY * 0.1) + 3) * 2;
        //circleSize = (Math.sin(circleY * circleX) + 1.0) * 3.0;
        var noiseVal = noise( circleX * 0.009, circleY * 0.00451, time );
        circleSize = noiseVal * 100.0;
        noFill();
        ellipse(circleX, circleY-mouseX, circleSize, circleSize);
      }
    }
    for (var circleY = 0; circleY <= height; circleY = circleY + 25) {
      for(var circleX = 0; circleX <= width; circleX = circleX + 25) {
        //circleSize = random(1, 10);
        //circleSize = (Math.cos(circleX * 0.1) + Math.sin(circleY * 0.1) + 3) * 2;
        //circleSize = (Math.sin(circleY * circleX) + 1.0) * 3.0;
        var noiseVal = noise( circleX * 0.1, circleY * 0.00451, time );
        circleSize = noiseVal * 25.0;
        fill(0,0,255);
        ellipse(circleX+mouseX, circleY, circleSize, circleSize);
      }
    }
    for (var circleY = 0; circleY <= height; circleY = circleY + 25) {
      for(var circleX = 0; circleX <= width; circleX = circleX + 25) {
        //circleSize = random(1, 10);
        //circleSize = (Math.cos(circleX * 0.1) + Math.sin(circleY * 0.1) + 3) * 2;
        //circleSize = (Math.sin(circleY * circleX) + 1.0) * 3.0;
        var noiseVal = noise( circleX * 0.009, circleY * 0.00451, time );
        circleSize = noiseVal * 20.0;
        fill(0,255,0);
        ellipse(circleX-mouseX, circleY, circleSize, circleSize);
      }
    }
}
//counter color or all diifrent coloor

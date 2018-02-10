var time = 0;

function setup() {
  createCanvas(800, 500);
  colorMode(HSB, 360, 255, 255);
  circleY=250;
  circleX=250;
  circleXspeed=60;
  circleYspeed=35;
}

function draw() {
  background(0);
  var circleSize = 10;
  var circleSpace = 15;
  time = time + 0.007;

  for (var circleY = 0; circleY <= height; circleY = circleY + circleSpace) {
    for(var circleX = 0; circleX <= width; circleX = circleX + circleSpace) {
      //circleSize = random(1, 10);
      //circleSize = (Math.cos(circleX * 0.1) + Math.sin(circleY * 0.1) + 3) * 2;
      //circleSize = (Math.sin(circleY * circleX) + 1.0) * 3.0;
      var noiseVal = noise( circleX * 0.009, circleY * 0.00451, time );
      circleSize = noiseVal * 50.0;
      fill(0,250,250);
      ellipse(circleX+mouseX-20, circleY+mouseY-10, circleSize, circleSize);
    }
  }
  for (var circleY = 0; circleY <= 500; circleY = circleY + 30) {
    for(var circleX = 0; circleX <= 800; circleX = circleX + 30) {
      //circleSize = random(1, 10);
      //circleSize = (Math.cos(circleX * 0.1) + Math.sin(circleY * 0.1) + 3) * 2;
      //circleSize = (Math.sin(circleY * circleX) + 1.0) * 3.0;
      var noiseVal = noise( circleX * 0.009, circleY * 0.00451, time );
      circleSize = noiseVal * 40.0;
      fill(noiseVal * mouseX, noiseVal * mouseY, 255);
      ellipse(circleX, circleY, circleSize, circleSize);
    }
  }
  for (var circleY = 0; circleY <=500; circleY = circleY + 60) {
    for(var circleX = 0; circleX <= 800; circleX = circleX + 60) {
      //circleSize = random(1, 10);
      //circleSize = (Math.cos(circleX * 0.1) + Math.sin(circleY * 0.1) + 3) * 2;
      //circleSize = (Math.sin(circleY * circleX) + 1.0) * 3.0;
      var noiseVal = noise( circleX * 0.009, circleY * 0.00451, time );
      circleSize = noiseVal * 120.0;
      fill(255,0, 255);
      ellipse(circleX, circleY, circleSize, circleSize);
    }
  }
  for (var circleY = 0; circleY <=500; circleY = circleY + 120) {
    for(var circleX = 0; circleX <= 800; circleX = circleX + 120) {
      //circleSize = random(1, 10);
      //circleSize = (Math.cos(circleX * 0.1) + Math.sin(circleY * 0.1) + 3) * 2;
      //circleSize = (Math.sin(circleY * circleX) + 1.0) * 3.0;
      var noiseVal = noise( circleX * 0.009, circleY * 0.00451, time );
      circleSize = noiseVal * 80.0;
      fill(255,255,0);
      ellipse(circleX, circleY, circleSize, circleSize);
    }
  }
  for (var circleY = 0; circleY <=500; circleY = circleY + 120) {
    for(var circleX = 0; circleX <= 800; circleX = circleX + 120) {
      //circleSize = random(1, 10);
      //circleSize = (Math.cos(circleX * 0.1) + Math.sin(circleY * 0.1) + 3) * 2;
      //circleSize = (Math.sin(circleY * circleX) + 1.0) * 3.0;
      var noiseVal = noise( circleX * 0.009, circleY * 0.00451, time );
      circleSize = noiseVal * 50.0;
      fill(255,0,255);
      ellipse(circleX+mouseX-10, circleY+mouseY-10, circleSize, circleSize);
    }
  }
  for (var circleY = 0; circleY <=500; circleY = circleY + 120) {
    for(var circleX = 0; circleX <= 800; circleX = circleX + 120) {
      //circleSize = random(1, 10);
      //circleSize = (Math.cos(circleX * 0.1) + Math.sin(circleY * 0.1) + 3) * 2;
      //circleSize = (Math.sin(circleY * circleX) + 1.0) * 3.0;
      var noiseVal = noise( circleX * 0.009, circleY * 0.00451, time );
      circleSize = noiseVal * 20.0;
      fill(255,255,0);
      ellipse(circleX+mouseX-5, circleY+mouseY-5, circleSize, circleSize);
    }
  }
  for (var circleY = 0; circleY <=500; circleY = circleY + 120) {
    for(var circleX = 0; circleX <= 800; circleX = circleX + 120) {
      //circleSize = random(1, 10);
      //circleSize = (Math.cos(circleX * 0.1) + Math.sin(circleY * 0.1) + 3) * 2;
      //circleSize = (Math.sin(circleY * circleX) + 1.0) * 3.0;
      var noiseVal = noise( circleX * 0.009, circleY * 0.00451, time );
      circleSize = noiseVal *10.0;
      fill(255,0,255);
      ellipse(circleX+mouseX, circleY+mouseY, circleSize, circleSize);
    }
  }

}

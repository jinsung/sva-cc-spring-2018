var hintImage, skyImage, stars = [];

function setup() {
  createCanvas(windowWidth, windowWidth);
  noCursor();
  noStroke();
  fill(255);

  hintImage = loadImage("goodnight.png");
  skyImage = loadImage("nightsky.jpg");
}

function draw() {
  image(skyImage, 0, 0);

  var position = createVector(mouseX, mouseY);

  fill(255, 192, 0);
  ellipse(position.x, position.y, 10, 10);

  if (mouseIsPressed) {
    var target = findPixel();
    var star = new Star(position, target, random(255));

    stars.push(star);
    if (stars.length > 2000) stars.shift();
  }

  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].draw();
  }
}

function findPixel() {
  var x, y;
  for (var i = 0; i < 15; i++) {
    x = floor(random(hintImage.width));
    y = floor(random(hintImage.height));

    if (red(hintImage.get(x, y)) > 0) break;
  }
  return createVector(x + 100, y + 100);
}

function Star(position, target, color) {
  this.position = position;
  this.target = target;
  this.diameter = random(3, 3);
  this.color = color;
}

Star.prototype.update = function() {
  this.position = p5.Vector.lerp(
    this.position,
    this.target,
    0.04
  );
};

Star.prototype.draw = function() {
  var alpha = 1;/*noise(
    this.target.x,
    this.target.y,
    millis() / 10000
  );*/

  fill(random(255), 255);

  ellipse(
    this.position.x, this.position.y,
    this.diameter, this.diameter
  );
}

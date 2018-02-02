function setup () {
  createCanvas(500, 500);
	background(150);

  ellipseMode(CENTER);
	fill(255, 0, 0);
	ellipse(100, 100, 100, 100);

	ellipseMode(CORNER);
	fill(0, 255, 0);
	ellipse(100, 100, 100, 100);

	ellipseMode(CORNERS);
	fill(0, 0, 255);
	ellipse(100, 100, 150, 150);

  rectMode(CORNER);
	fill(255, 0, 0);
  rect(300, 300, 100, 100);

  rectMode(CENTER);
  fill(0, 255, 0);
  rect(300, 300, 100, 100);

  rectMode(CORNERS);
  fill(0, 0, 255);
  rect(300, 300, 200, 200);

}

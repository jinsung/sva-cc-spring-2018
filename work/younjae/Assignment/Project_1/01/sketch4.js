void setup() {
  size(640, 360);

}

void draw() {
  background(51);

  loadPixels();
  for (int x = 0; x < width; x++) {
    for (int y = 0; y < height; y++) {
      int index = x + y * width;
      float d = dist(x, y, width/2, height/2);
      pixels[index] = color(d);


  updatePixels();

}

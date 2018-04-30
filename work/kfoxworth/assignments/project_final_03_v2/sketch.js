var tree;
var max_dist = 10;
var min_dist = 10;

function setup() {
 createCanvas(500, 500);
 tree = new Tree();
}

function draw() {
  background(200);
  tree.show();
  tree.grow();
}


function Tree() {
  this.leaves = [];

  for (var i = 0; 1 < 100; i++) {
    this.leaves.push(new Leaf());
  }


  this.show = function() {
    for (var i = 0; i < this.leaves.length; i++) {
      this.leaves[i].show();
    }

  }
}

'use strict'
function Cell(dom) {
  this.dom = dom;
  this.state = Cell.EMPTY;
  //sa sterg innerHTML la ''
  document.querySelectorAll(".square").forEach(function(square) {
    square.innerHTML = "";
  });
}

Cell.EMPTY = 0;
Cell.X = 1;
Cell.O = 2;

Cell.prototype.show = function() {
  let div = document.getElementById(this.dom);
  if (this.state === Cell.X) {
    div.innerHTML = '<font color="black">' + Player.X;
  } else if (this.state === Cell.O) {
    div.innerHTML = '<font color="red">' + Player.O;
  }
}
'use strict'
function Cell(dom) {
  this.dom = dom;
  this.coordinates= this.dom.split('_');  
  // this.x = this.coordinates[1];
  // this.y = this.coordinates[2];
  this.state = Cell.EMPTY;
  //sa sterg innerHTML la ''
  document.querySelectorAll(".square").forEach(function(square) {
    square.innerHTML = Cell.EMPTY;
  });
}

Cell.EMPTY = '';
Cell.X = 'X';
Cell.O = 'O';

Cell.prototype.show = function() {
  let div = document.getElementById(this.dom);
  if (this.state === Cell.X) {
    div.innerHTML = '<font color="black">' + Player.X;
  } else if (this.state === Cell.O) {
    div.innerHTML = '<font color="red">' + Player.O;
  }
}
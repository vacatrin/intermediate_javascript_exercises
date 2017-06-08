'use strict'
function Board() {
  this.board = [
    [new Cell('square_0_0'), new Cell('square_0_1'), new Cell('square_0_2')],
    [new Cell('square_1_0'), new Cell('square_1_1'), new Cell('square_1_2')],
    [new Cell('square_2_0'), new Cell('square_2_1'), new Cell('square_2_2')]
  ];
}

Board.prototype.showCell = function() {
  let div = document.getElementById(this.dom);
  if (this.state === Cell.X) {
    div.innerHTML = '<font color="black">' + Player.X;
  } else if (this.state === Cell.O) {
    div.innerHTML = '<font color="red">' + Player.O;
  }
}

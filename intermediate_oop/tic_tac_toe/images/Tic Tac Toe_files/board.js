'use strict'
function Board() {
  this.board = [
    [new Cell('square_0_0'), new Cell('square_0_1'), new Cell('square_0_2')],
    [new Cell('square_1_0'), new Cell('square_1_1'), new Cell('square_1_2')],
    [new Cell('square_2_0'), new Cell('square_2_1'), new Cell('square_2_2')]
  ];
}

Board.prototype.showCell = function() {

  document.getElementById('board').addEventListener('click', function(event){
    //event.target.id contine id-ul patratului pe care facem click 
    let celula = document.getElementById(event.target.id);
    console.log(celula);
    //aici imi scrie bine X-uri
    if (game.playerX.isTurn && celula.innerHTML === '') {
      //celula.protot
      celula.innerHTML = '<font color="black">' + game.playerX.type;
      game.playerX.changeTurn();
      game.playerO.changeTurn();
    } else if (game.playerO.isTurn && celula.innerHTML === '') {
      celula.innerHTML = '<font color="red">' + game.playerO.type;
      game.playerO.changeTurn();
      game.playerX.changeTurn();
    }
  });







  // let div = document.getElementById(this.dom);
  // if (this.state === Cell.X) {
  //   div.innerHTML = '<font color="black">' + Player.X;
  // } else if (this.state === Cell.O) {
  //   div.innerHTML = '<font color="red">' + Player.O;
  // }
}

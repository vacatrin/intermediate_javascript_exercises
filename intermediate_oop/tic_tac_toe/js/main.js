'use strict'
document.addEventListener("DOMContentLoaded", function() {

  let game = new TicTacToe();

  console.log(game.gameBoard.board[0][0].dom);

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
});

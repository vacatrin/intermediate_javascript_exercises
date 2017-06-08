'use strict'
document.addEventListener("DOMContentLoaded", function() {

  let game = new TicTacToe();

  document.getElementById('board').addEventListener('click', function(event){
    //event.target.id contine id-ul patratului pe care facem click 
    let celula = document.getElementById(event.target.id);
    //if I click outside the table, or the New Game button, it must not return an error to me. 
    if (!celula) {
      return;
    }

    let idCellStr = celula.getAttribute("id");
    //if I click on the New Game button, then I will not get the needed parameters for the button coordinates, and the app will return an error
    //That must not happen, and I am preventing that here.
    if(!idCellStr) {
      return;
    }

    let idCell = idCellStr.toString().split('_');
    //Only the ID of the cells can be split by using the '_' character. I am using this validation to avoit an error message if I click on the New Game button.
    if (idCell.length !== 3) {
      return;
    }

    //I am getting the board coordinates of the cell I click
    let cellX = idCell[1];
    let cellY = idCell[2];

    //I display the button I clicked on, and change the turn of the player
    if (game.playerX.isTurn) {
      game.gameBoard.setCell(cellX, cellY, Cell.X);
      game.changePlayerTurn();
    } else {
      game.gameBoard.setCell(cellX, cellY, Cell.O);
      game.changePlayerTurn();
    }

    //the game can be won by somebody only after 5 moves. So we are going to check that starting from the 5th move.
    if (game.gameBoard.counter >= 5) {
      game.gameBoard.checkIfWinner();
    }
  });

  //when the New Game is clicked, a new game will start
  document.getElementById("new-game").addEventListener("click", function() {
    game.newGame();
  });
});

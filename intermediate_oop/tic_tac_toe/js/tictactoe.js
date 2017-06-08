'use strict'
function TicTacToe() {
  TicTacToe.prototype.newGame();
};

TicTacToe.prototype.newGame = function() {
  //this should generate a new game, when the New Game button is cliecked
  this.state = TicTacToe.PLAYING;
  this.playerX = new Player(Player.X, true);
  this.playerO = new Player(Player.O, false);
  this.gameBoard = new Board();
  this.playerTurn = Player.X;
}
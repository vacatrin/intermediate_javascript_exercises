'use strict'
function TicTacToe() {
  this.newGame();
};

//we have defined the TicTacToe class in its prototype, in function newGame()
TicTacToe.prototype.newGame = function() {
  //this should generate a new game, when the New Game button is cliecked
  this.state = TicTacToe.PLAYING;
  this.playerX = new Player(Player.X, true);
  this.playerO = new Player(Player.O, false);
  this.gameBoard = new Board();
  this.playerTurn = Player.X;
  document.getElementById('message').innerHTML = 'It\'s ' + this.playerTurn + '\'s turn';
}

  //when a new cell is filled in, we need to change the player turn, and also display whose turn it it.
  TicTacToe.prototype.changePlayerTurn = function() {
    this.playerX.isTurn = !this.playerX.isTurn;
    this.playerO.isTurn = !this.playerO.isTurn;
    if (this.playerX.isTurn) {
      document.getElementById('message').innerHTML = 'It\'s ' + this.playerX.type + '\'s turn';
    } else {
      document.getElementById('message').innerHTML = 'It\'s ' + this.playerO.type + '\'s turn';
    }
  }
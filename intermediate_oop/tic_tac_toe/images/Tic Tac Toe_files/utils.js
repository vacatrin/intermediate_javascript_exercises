let newGame = function() {
  TicTacToe.prototype.newGame();
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("new-game").addEventListener("click", function() {
    newGame();
  });
});
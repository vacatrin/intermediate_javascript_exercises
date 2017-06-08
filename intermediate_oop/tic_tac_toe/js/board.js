'use strict'
function Board() {
  this.board = [
    [new Cell('square_0_0'), new Cell('square_0_1'), new Cell('square_0_2')],
    [new Cell('square_1_0'), new Cell('square_1_1'), new Cell('square_1_2')],
    [new Cell('square_2_0'), new Cell('square_2_1'), new Cell('square_2_2')]
  ];
  this.counter = 0;
}

Board.prototype.setCell = function(x, y, value) {
  if ( this.board[x][y].state == Cell.EMPTY ) {
    this.board[x][y].state = value;
    this.board[x][y].show();
    this.counter++;
    console.log(this.counter);
  }
}

Board.prototype.checkIfWinner = function() {

    if (this.board[0][0].state !== Cell.EMPTY && this.board[0][0].state === this.board[1][1].state && this.board[1][1].state === this.board[2][2].state) {
      let winnerMessage = document.getElementById('message').innerHTML = this.board[0][0].state + ' is the winner!';      
      return;
    }    

    if (this.board[0][2].state !== Cell.EMPTY && this.board[0][2].state === this.board[1][1].state && this.board[1][1].state === this.board[2][0].state) {
      let winnerMessage = document.getElementById('message').innerHTML = this.board[0][2].state + ' is the winner!';
      return;
    }

  for (let i = 0; i < this.board.length; i++) {

    if (this.board[i][0].state !== Cell.EMPTY && this.board[i][0].state === this.board[i][1].state && this.board[i][1].state === this.board[i][2].state) {
      let winnerMessage = document.getElementById('message').innerHTML = this.board[i][0].state + ' is the winner!';
      return;
    }

    if (this.board[0][i].state !== Cell.EMPTY && this.board[0][i].state === this.board[1][i].state && this.board[1][i].state === this.board[2][i].state) {
      let winnerMessage = document.getElementById('message').innerHTML = this.board[0][i].state + ' is the winner!';
      return;
    }
  }

  if (this.counter === 9){
    let winnerMessage = document.getElementById('message').innerHTML = 'It\'s a tie!!!';
  }
}


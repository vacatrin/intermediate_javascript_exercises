'use strict'
//the type will be 'x' or 'o'
//the isTurn will be false or true
function Player(type, isTurn) {
  this.type = type;
  this.isTurn = isTurn;
}

Player.X = 'X';
Player.O = 'O';
// let playerX = new Player('x',true);
// let playerY = new Player('y',false);

// Player.prototype.changeTurn = function(){
//   if ( this.isTurn === true) {
//     this.isTurn = false;
//   } else {
//     this.isTurn = true;
//   }
// }

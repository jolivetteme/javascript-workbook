'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  // Your code here
}

function verticalWin() {
  // Your code here
}

function diagonalWin() {
  // Your code here
}

function checkForWin() {
  // Your code here
}

function ticTacToe(row, column) {
  
  // let game = {
  //   gameStart:1,
  //   gameEnd:9,
  //   gameTurn:1,
  //   gameOver:0,
  //   playerTurn: [1,2],
  // }

  let player1 = {
    gamePiece:'X',
    myTurn:[1,3,5,7,9]
  }
  let player2 = {
    gamePiece: 'O',
    myTurn:[2,4,6,8]
  }
  let history = new Array();
  
  //Ready Player One
  for (let i=1;i<=9;i++) {//game loop;9 max game turns;//there is no pass;//player1 has+1 turn;player 1 is first and last unless horz, verti, or diag win
    history.id=i;
    history.row=row;
    history.player=(i%2==0)?2:1;
    history.column=column;
    // board[row][column]=(history.player==1):'X'?'O'
    board[row][column]='X';
  }
  //Check Duplicate  
  //switch players (automagically)  
}
  ticTacToe(2,0);
  printBoard();



// function getPrompt() {
//   printBoard();
//   console.log("It's Player " + playerTurn + "'s turn.");
//   rl.question('row: ', (row) => {
//     rl.question('column: ', (column) => {
//       ticTacToe(row, column);
//       getPrompt();
//     });
//   });

// }

// Tests
// if (typeof describe === 'function') {

//   describe('#ticTacToe()', () => {
//     it('should place mark on the board', () => {
//       ticTacToe(1, 1);
//       assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
//     });
//     it('should alternate between players', () => {
//       ticTacToe(0, 0);
//       assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
//     });
//     it('should check for vertical wins', () => {
//       board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
//       assert.equal(verticalWin(), true);
//     });
//     it('should check for horizontal wins', () => {
//       board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
//       assert.equal(horizontalWin(), true);
//     });
//     it('should check for diagonal wins', () => {
//       board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
//       assert.equal(diagonalWin(), true);
//     });
//     it('should detect a win', () => {
//       assert.equal(checkForWin(), true);
//     });
//   });
// } else {

//   getPrompt();

// }
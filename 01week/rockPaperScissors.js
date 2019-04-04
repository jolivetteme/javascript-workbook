'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {
  // Write code here
  //var resultofexpression = conditionasboolean ? truepart: falsepart;
  hand1 = parseInt(hand1);
  hand2 = parseInt(hand2);

  // var whichOne = ['rock':1,'paper':2, 'scissors':3]

  var rock = 1;;
  var paper = 2;
  var scissors = 3;

  var winner = "Player ";



  
  if (hand1===1&&hand2===3) {
    winner += 1 +" Wins!!";
  } else if (hand1===1&&hand2===2) {
    winner += 2 +" Wins!!";
  } else if (hand1===2&&hand2===1) {
    winner += 1 +" Wins!!";
  } else if (hand1===2&&hand2===3) {
    winner += 2 +" Wins!!";
  } else if (hand1===3&&hand2===2) {
    winner += 1 +" Wins!!";
  } else if (hand1===3&&hand2===1) {
    winner += 2 +" Wins!!";
  }
    else {
    winner = "It's a tie!";
  }


  return winner;
}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}

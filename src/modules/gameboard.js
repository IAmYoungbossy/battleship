/* eslint-disable no-plusplus */
const Ship = require("./ship");

function Gameboard(receiveAttack) {
  const board = new Array(10);

  for (let i = 0; i < board.length; i++) {
    board[i] = new Array(10);
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = 0;
    }
  }

  const ship5 = Ship([4, 3], 5, "X", receiveAttack).shipCoord;
  const ship4 = Ship([2, 0], 4, "Y", receiveAttack).shipCoord;
  const ship3 = Ship([0, 9], 3, "Y", receiveAttack).shipCoord;
  const shipE = Ship([9, 4], 3, "X", receiveAttack).shipCoord;
  const ship2 = Ship([7, 1], 2, "Y", receiveAttack).shipCoord;

  ship5.forEach((grid) => { board[grid[0]][grid[1]] = 1; });
  ship4.forEach((grid) => { board[grid[0]][grid[1]] = 1; });
  ship3.forEach((grid) => { board[grid[0]][grid[1]] = 1; });
  shipE.forEach((grid) => { board[grid[0]][grid[1]] = 1; });
  ship2.forEach((grid) => { board[grid[0]][grid[1]] = 1; });

  return board;
}

console.table(Gameboard());

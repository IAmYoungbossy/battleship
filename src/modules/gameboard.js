/* eslint-disable no-plusplus */
const create2DArray = require("./2d-array");
const Ship = require("./ship");
const checkValidMove = require("./valid-move");

function Gameboard(receiveAttack) {
  const board = create2DArray(10);

  const ship5 = Ship([4, 2], 5, "X", receiveAttack).shipCoord;
  const ship4 = Ship([2, 0], 4, "Y", receiveAttack).shipCoord;
  const ship3 = Ship([0, 9], 3, "Y", receiveAttack).shipCoord;
  const shipE = Ship([8, 3], 3, "X", receiveAttack).shipCoord;
  const ship2 = Ship([7, 1], 2, "Y", receiveAttack).shipCoord;

  checkValidMove(ship5, board);
  checkValidMove(ship4, board);
  checkValidMove(ship3, board);
  checkValidMove(shipE, board);
  checkValidMove(ship2, board);

  return board;
}

console.table(Gameboard());
module.exports = Gameboard;

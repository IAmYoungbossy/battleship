/* eslint-disable no-plusplus */
const create2DArray = require("./2d-array");
const Ship = require("./ship");
const checkValidMove = require("./valid-move");

function Gameboard(receiveAttack) {
  const board = create2DArray(10);

  const ship5 = Ship([4, 3], 5, "X", receiveAttack).shipCoord;
  const ship4 = Ship([2, 0], 4, "Y", receiveAttack).shipCoord;
  const ship3 = Ship([0, 9], 3, "Y", receiveAttack).shipCoord;
  const shipE = Ship([8, 3], 3, "X", receiveAttack).shipCoord;
  const ship2 = Ship([7, 1], 2, "Y", receiveAttack).shipCoord;

  const ship5Dom = checkValidMove(ship5, board);
  const ship4Dom = checkValidMove(ship4, board);
  const ship3Dom = checkValidMove(ship3, board);
  const shipEDom = checkValidMove(shipE, board);
  const ship2Dom = checkValidMove(ship2, board);

  return {
    ship5Dom, ship4Dom, ship3Dom, shipEDom, ship2Dom,
  };
}

console.table(Gameboard());
module.exports = Gameboard;

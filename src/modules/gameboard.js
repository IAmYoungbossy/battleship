/* eslint-disable no-plusplus */
const create2DArray = require("./2d-array");
const Ship = require("./ship");
const checkValidMove = require("./valid-move");

function Gameboard(x, y, receiveAttack) {
  const board = create2DArray(10);
  const arrayCoord = [];

  const ship = Ship([x, y], 5, "X", receiveAttack).shipCoord;
  // const ship4 = Ship([2, 0], 4, "Y", receiveAttack).shipCoord;
  // const ship3 = Ship([0, 9], 3, "Y", receiveAttack).shipCoord;
  // const shipE = Ship([8, 3], 3, "X", receiveAttack).shipCoord;
  // const ship2 = Ship([7, 1], 2, "Y", receiveAttack).shipCoord;

  const shipCoords = checkValidMove(ship, board);
  // const ship4Dom = checkValidMove(ship4, board);
  // const ship3Dom = checkValidMove(ship3, board);
  // const shipEDom = checkValidMove(shipE, board);
  // const ship2Dom = checkValidMove(ship2, board);

  arrayCoord.push(shipCoords);

  arrayCoord.forEach((coord, index) => {
    if (!coord) arrayCoord.splice(index, 1);
  });

  return arrayCoord;
}

// console.table(Gameboard());
module.exports = Gameboard;

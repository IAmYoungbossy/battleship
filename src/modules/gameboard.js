/* eslint-disable no-plusplus */
const create2DArray = require("./2d-array");
const Ship = require("./ship");
const checkValidMove = require("./valid-move");

function Gameboard(x, y, length, align, receiveAttack) {
  const ship = Ship([x, y], length, align, receiveAttack).shipCoord;
  const board = create2DArray(10);
  const shipCoords = checkValidMove(ship, board);
  const arrayCoord = [];

  arrayCoord.push(shipCoords);
  arrayCoord.forEach((coord, index) => {
    if (!coord) arrayCoord.splice(index, 1);
  });

  return arrayCoord;
}

module.exports = Gameboard;

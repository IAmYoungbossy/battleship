const Gameboard = require("../gameboard");
const placeShips = require("../placeShipsOnBoard");

function showShipsRandomly() {
  const {
    positionShip, receiveAttack, allShipsSunk, Arr,
  } = Gameboard(placeShips.placeComputerShips);
  positionShip();
  return { receiveAttack, allShipsSunk, Arr };
}

module.exports = showShipsRandomly;

const Gameboard = require("../gameboard");
const placeShips = require("../placeShipsOnBoard");

function showShipsRandomly() {
  const {
    positionShip, receiveAttack, allShipsSunk,
  } = Gameboard(placeShips.placeComputerShips);
  positionShip();
  return { receiveAttack, allShipsSunk };
}

module.exports = showShipsRandomly;

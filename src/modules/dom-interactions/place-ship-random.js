const Gameboard = require("../gameboard");
const placeShips = require("../placeShipsOnBoard");

function showShipsRandomly() {
  const squares = document.querySelectorAll(".player2-grid");
  const {
    board, positionShip, receiveAttack, Arr, allShipsSunk,
  } = Gameboard(placeShips.placeComputerShips);
  positionShip();
  // board.flat().forEach((item, index2) => {
  //   if (item === 1) squares[index2].classList.add("ship");
  // });
  return { receiveAttack, Arr, allShipsSunk };
}

module.exports = showShipsRandomly;

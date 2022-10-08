/* eslint-disable no-use-before-define */
const Gameboard = require("../gameboard");
const placeShips = require("../placeShipsOnBoard");

/** Gets ships coordinates from Gameboard and display in DOM */
function showShipsOnBoard(className) {
  const header = document.querySelector("h1");
  const squares = document.querySelectorAll(`.${className}`);
  const {
    board, positionShip, alignShip, receiveAttack, allShipsSunk, Arr,
  } = Gameboard(placeShips.placePlayerShips);

  const addListener = (square, index) => {
    square.addEventListener(
      "click",
      addBackgroundColor.bind(null, index, positionShip, board, squares),
    );
  };
  header.addEventListener("click", alignShip);
  squares.forEach(addListener);
  return [receiveAttack, Arr, allShipsSunk];
}

/** Adds background colour for missed shots */
function addBackgroundColor(index, positionShip, board, squares) {
  positionShip(index);
  board.flat().forEach((item, index2) => {
    if (item === 1) {
      squares[index2].classList.add("ship");
    }
  });
}

module.exports = showShipsOnBoard;

/* eslint-disable no-use-before-define */
const Gameboard = require("../gameboard");
const placeShips = require("../placeShipsOnBoard");

/** Gets ships coordinates from Gameboard and display in DOM */
function showShipsOnBoard(className) {
  const align = document.querySelector(".align-ships");
  const squares = document.querySelectorAll(`.${className}`);
  const {
    board, positionShip, alignShip, receiveAttack, allShipsSunk, Arr,
  } = Gameboard(placeShips.placePlayerShips);
  const player2 = document.querySelector(".player2-board");
  const addListener = (square, index) => {
    square.addEventListener(
      "click",
      addBgColor.bind(null, index, positionShip, board, squares, Arr, player2),
    );
  };
  align.addEventListener("click", alignShip);
  squares.forEach(addListener);
  return [receiveAttack, Arr, allShipsSunk];
}

/** Adds background colour for missed shots */
function addBgColor(index, positionShip, board, squares, Arr, player2) {
  positionShip(index);
  board.flat().forEach((item, index2) => {
    if (item === 1) {
      squares[index2].classList.add("ship");
    }
  });
  if (Arr.length === 5) player2.classList.add("show");
}

module.exports = showShipsOnBoard;

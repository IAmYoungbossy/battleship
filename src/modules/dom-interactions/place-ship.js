/* eslint-disable no-use-before-define */
const Gameboard = require("../gameboard");

function showShipsOnBoard() {
  const header = document.querySelector("h1");
  const squares = document.querySelectorAll(".player1-grid");
  const { board, positionShip, alignShip } = Gameboard();

  header.addEventListener("click", alignShip);
  squares.forEach(addListener);

  function addListener(square, index) {
    square.addEventListener(
      "click",
      addBackgroundColor.bind(null, index, positionShip, board, squares),
    );
  }
}

function addBackgroundColor(index, positionShip, board, squares) {
  positionShip(index);
  board.flat().forEach((item, index2) => {
    if (item === 1) squares[index2].classList.add("ship");
  });
}

module.exports = showShipsOnBoard;

/* eslint-disable no-return-assign */
/* eslint-disable no-use-before-define */
const create2DArray = require("../2d-array");
const shipAxis = require("../gameboard");

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

function Gameboard() {
  const alignShip = () => (align = align === "X" ? "Y" : "X");
  const board = create2DArray(10);
  let align = "X";
  const Arr = [];

  const positionShip = (index) => {
    let shipLenght;
    if (Arr.length > 4) return;
    if (Arr.length === 0) shipLenght = 5;
    if (Arr.length === 1) shipLenght = 4;
    if (Arr.length === 2) shipLenght = 3;
    if (Arr.length === 3) shipLenght = 3;
    if (Arr.length === 4) shipLenght = 2;
    const axis = `${index}`.split("");
    if (axis.length === 1) axis.unshift("0");
    const coords = shipAxis(+axis[0], +axis[1], shipLenght, align, board);
    if (coords.length !== 0) Arr.push({ shipLenght, axis, align });
  };
  return { board, positionShip, alignShip };
}
module.exports = showShipsOnBoard;

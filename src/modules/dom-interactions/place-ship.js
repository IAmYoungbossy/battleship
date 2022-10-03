const create2DArray = require("../2d-array");
const Gameboard = require("../gameboard");

function showShipsOnBoard() {
  const header = document.querySelector("h1");
  const squares = document.querySelectorAll(".player1-grid");
  const alignShip = () => (align = align === "X" ? "Y" : "X");
  const board = create2DArray(10);
  const Arr = [];
  let align = "X";
  let shipLenght;

  header.addEventListener("click", alignShip);
  squares.forEach((square, index) => {
    square.addEventListener("click", () => {
      if (Arr.length > 4) return;
      if (Arr.length === 0) shipLenght = 5;
      if (Arr.length === 1) shipLenght = 4;
      if (Arr.length === 2) shipLenght = 3;
      if (Arr.length === 3) shipLenght = 3;
      if (Arr.length === 4) shipLenght = 2;
      const axis = `${index}`.split("");
      if (axis.length === 1) axis.unshift("0");
      const coords = Gameboard(+axis[0], +axis[1], shipLenght, align, board);
      if (coords.length !== 0) Arr.push(coords);
      board.flat().forEach((item, index2) => {
        if (item === 1) squares[index2].classList.add("ship");
      });
    });
  });
}

module.exports = showShipsOnBoard;

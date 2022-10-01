const create2DArray = require("../2d-array");
const Gameboard = require("../gameboard");
const createDomElement = require("./helper-function");

function createGameboard() {
  const { body } = document;
  const boardContainer = createDomElement("div", { class: "board-container" });

  function grids() {
    const square = createDomElement("div", { class: "square" });
    for (let i = 0; i < 100; i += 1) {
      const grid = createDomElement("div", {
        class: "grid",
        "data-index-number": `${i}`,
      });
      square.appendChild(grid);
    }
    return { square };
  }

  boardContainer.appendChild(grids().square);
  boardContainer.appendChild(grids().square);
  body.appendChild(boardContainer);
}

function showShipsOnBoard() {
  const board = create2DArray(10);
  const squares = document.querySelectorAll(".grid");
  const header = document.querySelector("h1");
  const Arr = [];
  let shipLenght;
  let align = "X";

  header.addEventListener("click", () => {
    align = align === "X" ? "Y" : "X";
  });
  squares.forEach((square, index) => {
    square.addEventListener("click", () => {
      if (Arr.length > 4) return;
      for (let i = 0; i < 1; i += 1) {
        if (Arr.length === 0) shipLenght = 5;
        if (Arr.length === 1) shipLenght = 4;
        if (Arr.length === 2) shipLenght = 3;
        if (Arr.length === 3) shipLenght = 3;
        if (Arr.length === 4) shipLenght = 2;
      }
      const coord = `${index}`.split("");
      if (coord.length === 1) coord.unshift("0");
      const shipCoord = Gameboard(
        +coord[0],
        +coord[1],
        shipLenght,
        align,
        board,
      );
      if (shipCoord.length !== 0) Arr.push(shipCoord);
      board.flat().forEach((item, index2) => {
        if (item === 1) squares[index2].classList.add("ship");
      });
    });
  });
}

module.exports = {
  showShipsOnBoard,
  createGameboard,
};

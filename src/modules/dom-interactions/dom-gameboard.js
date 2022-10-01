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
  const header = document.querySelector("h1");
  const squares = document.querySelectorAll(".grid");

  const shipCoords = Gameboard(4, 2).flat();

  header.addEventListener("click", () => {
    squares.forEach((square, index) => {
      shipCoords.forEach((point) => {
        if (index === +point) {
          square.style.cssText = "background-color: grey;";
        }
      });
    });
  });
}

module.exports = {
  showShipsOnBoard,
  createGameboard,
};

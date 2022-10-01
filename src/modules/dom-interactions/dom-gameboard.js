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
  const squares = document.querySelectorAll(".grid");
  const header = document.querySelector("h1");
  const arr = [];
  let shipLenght;
  let align = "X";
  let counter = 6;
  let shipPointer = 0;

  header.addEventListener("click", () => {
    align = align === "X" ? "Y" : "X";
  });
  squares.forEach((square, index) => {
    square.addEventListener("click", () => {
      if (counter < 2) return;

      for (let i = 0; i < 1; i += 1) {
        counter -= 1;

        if (arr.length >= 3) arr.push(counter + 1);
        else arr.push(counter);

        shipLenght = arr[shipPointer];
        shipPointer += 1;
      }

      const coord = `${index}`.split("");
      if (coord.length === 1) coord.unshift(0);

      squares.forEach((item, index2) => {
        Gameboard(+coord[0], +coord[1], shipLenght, align)
          .flat()
          .forEach((point) => {
            if (index2 === +point) {
              item.classList.add("ship");
            }
          });
      });
    });
  });
}

module.exports = {
  showShipsOnBoard,
  createGameboard,
};

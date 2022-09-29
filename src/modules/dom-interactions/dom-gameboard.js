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

  // Gameboard();
}

module.exports = createGameboard;

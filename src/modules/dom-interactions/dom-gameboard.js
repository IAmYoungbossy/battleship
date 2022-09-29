const createDomElement = require("./helper-function");

function createGameboard() {
  const { body } = document;
  const boardContainer = createDomElement("div", { class: "board-container" });

  function grids() {
    const gameboard = createDomElement("div", { class: "gameboard" });
    for (let i = 0; i < 100; i += 1) {
      const grid = createDomElement("div", {
        class: "grid",
        "data-index-number": `${i}`,
      });
      gameboard.appendChild(grid);
    }
    return { gameboard };
  }

  boardContainer.appendChild(grids().gameboard);
  boardContainer.appendChild(grids().gameboard);
  body.appendChild(boardContainer);
}

module.exports = createGameboard;

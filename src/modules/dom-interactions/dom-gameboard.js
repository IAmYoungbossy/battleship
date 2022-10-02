const createDomElement = require("./helper-function");

function createGameboard() {
  const { body } = document;
  const boardContainer = createDomElement("div", { class: "board-container" });

  function grids(player, playerGrid) {
    const square = createDomElement("div", { class: player });
    for (let i = 0; i < 100; i += 1) {
      const grid = createDomElement("div", { class: playerGrid });
      square.appendChild(grid);
    }
    return { square };
  }

  boardContainer.appendChild(grids("player1-board", "player1-grid").square);
  boardContainer.appendChild(grids("player2-board", "player2-grid").square);
  body.appendChild(boardContainer);
}

module.exports = createGameboard;

import {createDomElement} from "./helper-function";

function createGameboard() {
  const boardContainer = createDomElement("div", { class: "board-container" });
  const grids = (player, playerGrid) => {
    const square = createDomElement("div", { class: player });
    for (let i = 0; i < 100; i += 1) {
      const grid = createDomElement("div", { class: playerGrid });
      square.appendChild(grid);
    }
    return square;
  };
  boardContainer.append(
    grids("player1-board", "player1-grid space"),
    grids("player2-board hide", "player2-grid space"),
  );
  return { boardContainer };
}

export {createGameboard};

import { createDomElement } from "./helper-function";

/** Creates DOM gameboard */
function createGameboard() {
  const boardContainer = createDomElement("div", { class: "board-container" });
  const containerDiv1 = createDomElement("div", { class: "container-div1" });
  const containerDiv2 = createDomElement("div", { class: "container-div2 hide" });
  const player1 = createDomElement("p", { class: "player" });
  const player2 = createDomElement("p", { class: "player2" });
  const grids = (player, playerGrid) => {
    const square = createDomElement("div", { class: player });
    for (let i = 0; i < 100; i += 1) {
      const grid = createDomElement("div", { class: playerGrid });
      square.appendChild(grid);
    }
    return square;
  };
  containerDiv1.append(player1, grids("player1-board", "player1-grid space"));
  containerDiv2.append(
    player2,
    grids("player2-board hide", "player2-grid space")
  );
  boardContainer.append(containerDiv1, containerDiv2);
  return { boardContainer };
}

export { createGameboard };

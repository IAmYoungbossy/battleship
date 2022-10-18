import { createFooter } from "./page-footer";
import { getName } from "./get-player-name";
import { createHeader } from "./page-header";
import { createDomElement } from "./helper-function";

function renderGetNamePage() {
  createHeader("page-one-header");
  getName("Enter Player's Name:");
  createFooter();
}

function announceWinner(playerName) {
  const gameOverDiv = createDomElement("div", { class: "game-over-div" });
  const gameOver = createDomElement("p", { class: "game-over" });
  const winner = createDomElement("p", { class: "winner" });
  const name = createDomElement("p", { class: "name" });
  const restartBtn = createDomElement("button", { class: "btn-restart" });
  restartBtn.textContent = "RESTART";
  gameOver.textContent = "GAME OVER";
  name.textContent = playerName;
  winner.textContent = "The Winner Is";
  gameOverDiv.append(gameOver, winner, name, restartBtn);
  renderGetNamePage();
  const getNameDiv = document.querySelector(".input-div");
  document.body.replaceChild(gameOverDiv, getNameDiv);
}

function restart() {
  const restart = document.createElement("button");
  const alignDiv = document.querySelector(".align-ships");
  const alignBtn = document.querySelector(".continue-btn");
  const axisBtn = document.querySelector(".axis-btn");
  alignDiv.replaceChild(restart, alignBtn);
  restart.textContent = "Restart";
  if (axisBtn) axisBtn.remove();
  restart.addEventListener("click", rerenderGetNamePage);
}

function rerenderGetNamePage() {
  while (document.body.firstChild)
    document.body.removeChild(document.body.firstChild);
  renderGetNamePage();
}

export { renderGetNamePage, restart, announceWinner };

import { createFooter } from "./page-footer";
import { getName } from "./get-player-name";
import { createHeader } from "./page-header";
import { createDomElement } from "./helper-function";
import { resetLengthAndCounter } from "./choose-player";
import { resetPlayerVsComputer } from "./player-vs-computer";
import { resetHumanPlayer } from "./player";

function renderGetNamePage() {
  document.body.classList.add("hidden");
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
  document.body.classList.add("fade");
  setTimeout(() => {
    document.body.classList.remove("fade");
    renderGetNamePage();
    const getNameDiv = document.querySelector(".input-div");
    document.body.replaceChild(gameOverDiv, getNameDiv);
    restartBtn.addEventListener("click", () => rerenderGetNamePage());
  }, 400);
}

function restart() {
  const restart = document.createElement("button");
  const alignDiv = document.querySelector(".align-ships");
  const alignBtn = document.querySelector(".continue-btn");
  const axisBtn = document.querySelector(".axis-btn");
  if (alignBtn) alignDiv.replaceChild(restart, alignBtn);
  restart.textContent = "Restart";
  if (axisBtn) axisBtn.remove();
  restart.addEventListener("click", rerenderGetNamePage);
}

function rerenderGetNamePage() {
  document.body.classList.add("fade");
  setTimeout(() => {
    document.body.classList.remove("fade");
    while (document.body.firstChild)
    document.body.removeChild(document.body.firstChild);
  renderGetNamePage();
  resetLengthAndCounter();
  resetPlayerVsComputer();
  resetHumanPlayer();
  }, 400);
}

export { renderGetNamePage, restart, announceWinner };

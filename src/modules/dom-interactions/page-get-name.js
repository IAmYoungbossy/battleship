import { createFooter } from "./page-footer";
import { getName } from "./get-player-name";
import { createHeader } from "./page-header";

function renderGetNamePage() {
  createHeader("page-one-header");
  getName("Enter Player's Name:");
  createFooter();
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

export { renderGetNamePage, restart };

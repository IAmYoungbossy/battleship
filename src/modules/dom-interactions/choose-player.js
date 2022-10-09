const createGameboard = require("./dom-gameboard");
const createDomElement = require("./helper-function");
const { playerShots } = require("./player-vs-computer");

function choosePlayer() {
  const chooseDiv = createDomElement("div", { class: "choose-div" });
  const btnDiv = createDomElement("div", { class: "btn-div" });
  const playAi = createDomElement("button", { class: "play-ai" });
  const playHuman = createDomElement("button", { class: "play-human" });
  const getNameDiv = document.querySelector(".input-div");
  const startBtn = document.querySelector(".start-btn");
  const instruction = createDomElement("p");

  playAi.textContent = "PLAY AI";
  playHuman.textContent = "PLAY HUMAN";
  btnDiv.append(playAi, playHuman);
  instruction.textContent = "Choose Your Enemy.";
  chooseDiv.append(instruction, btnDiv);
  const replaceNameDiv = () => document.body.replaceChild(chooseDiv, getNameDiv);
  const replaceChooseDiv = () => {
    const { boardContainer } = createGameboard();
    document.body.replaceChild(boardContainer, chooseDiv);
    playerShots();
  };
  startBtn.addEventListener("click", replaceNameDiv);
  if (playAi) playAi.addEventListener("click", replaceChooseDiv);
}

module.exports = choosePlayer;

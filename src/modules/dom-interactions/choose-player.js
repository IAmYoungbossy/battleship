const createGameboard = require("./dom-gameboard");
const createDomElement = require("./helper-function");
const { playerShots } = require("./player-vs-computer");

function choosePlayer() {
  const header = document.querySelector("h1");
  const head = document.querySelector("header");
  const chooseDiv = createDomElement("div", { class: "choose-div" });
  const btnDiv = createDomElement("div", { class: "btn-div" });
  const playAi = createDomElement("button", { class: "play-ai" });
  const playHuman = createDomElement("button", { class: "play-human" });
  const getNameDiv = document.querySelector(".input-div");
  const startBtn = document.querySelector(".start-btn");
  const instruction = createDomElement("p");
  const alignShipDiv = createDomElement("div", { class: "align-ships" });
  const instruction2 = createDomElement("p");
  const axisBtn = createDomElement("button", { class: "axis-btn" });

  playAi.textContent = "PLAY AI";
  playHuman.textContent = "PLAY HUMAN";
  instruction2.textContent = "PLACE YOUR SHIPS FOR BATTLE";
  axisBtn.textContent = "X AXIS";
  btnDiv.append(playAi, playHuman);
  alignShipDiv.append(instruction2, axisBtn);
  instruction.textContent = "Choose Your Enemy.";
  chooseDiv.append(instruction, btnDiv);
  const replaceNameDiv = () => document.body.replaceChild(chooseDiv, getNameDiv);
  startBtn.addEventListener("click", replaceNameDiv);
  if (playAi) {
    playAi.addEventListener(
      "click",
      replaceChooseDiv.bind(null, header, alignShipDiv, chooseDiv, head),
    );
  }
}

function replaceChooseDiv(header, alignShipDiv, chooseDiv, head) {
  header.classList.add("h1");
  head.classList.add("header");
  document.body.insertBefore(alignShipDiv, chooseDiv);
  const { boardContainer } = createGameboard();
  document.body.replaceChild(boardContainer, chooseDiv);
  playerShots();
}

module.exports = choosePlayer;

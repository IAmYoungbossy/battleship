const humanPlayers = require("../player");
const createGameboard = require("./dom-gameboard");
const createDomElement = require("./helper-function");
const createInputElem = require("./name-input");
const { playerShots } = require("./player-vs-computer");

function choosePlayer(playerName) {
  const chooseDiv = createDomElement("div", { class: "choose-div" });
  const btnDiv = createDomElement("div", { class: "btn-div" });
  const playAi = createDomElement("button", { class: "play-ai" });
  const playHuman = createDomElement("button", { class: "play-human" });
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
  instruction.textContent = `${playerName}, Choose Your Enemy.`;
  chooseDiv.append(instruction, btnDiv);
  playAi.addEventListener(
    "click",
    inserBoard.bind(null, alignShipDiv, chooseDiv, playerShots),
  );
  playHuman.addEventListener("click", Player2Name.bind(null, chooseDiv));
  return chooseDiv;
}

function inserBoard(alignShipDiv, chooseDiv, playerShot) {
  const header = document.querySelector("h1");
  const head = document.querySelector("header");
  const { boardContainer } = createGameboard();
  header.classList.add("h1");
  head.classList.add("header");
  document.body.insertBefore(alignShipDiv, chooseDiv);
  document.body.replaceChild(boardContainer, chooseDiv);
  playerShot();
}

function Player2Name(chooseDiv) {
  const { inputDiv } = createInputElem("Enter 2nd Player's Name", "Continue");
  document.body.replaceChild(inputDiv, chooseDiv);
  const input = document.querySelector("input");
  input.classList.add("second-input");
}

module.exports = choosePlayer;

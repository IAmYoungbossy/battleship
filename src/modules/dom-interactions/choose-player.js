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
    insertBoard.bind(null, alignShipDiv, chooseDiv, playerShots),
  );
  playHuman.addEventListener(
    "click",
    player2Name.bind(null, chooseDiv, humanPlayers, alignShipDiv),
  );

  return chooseDiv;
}

function insertBoard(alignShipDiv, chooseDiv, playerShot) {
  const header = document.querySelector("h1");
  const head = document.querySelector("header");
  const { boardContainer } = createGameboard();
  header.classList.add("h1");
  head.classList.add("header");
  document.body.insertBefore(alignShipDiv, chooseDiv);
  document.body.replaceChild(boardContainer, chooseDiv);
  playerShot();
}

function player2Name(chooseDiv, playerShot, alignShipDiv) {
  const input = document.querySelector("input");
  const { inputDiv, startBtn, nameInput } = createInputElem(
    "Enter 2nd Player's Name",
    "Continue",
  );
  document.body.replaceChild(inputDiv, chooseDiv);
  input.classList.add("second-input");
  startBtn.addEventListener(
    "click",
    player1Board.bind(null, nameInput, inputDiv, playerShot, alignShipDiv),
  );
}

function player1Board(nameInput, inputDiv, playerShot, alignShipDiv) {
  localStorage.setItem("player2Name", JSON.stringify(`${nameInput.value}`));
  insertBoard(alignShipDiv, inputDiv, playerShot);
}

module.exports = choosePlayer;

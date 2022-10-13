import {humanPlayers} from "../player";
import {createGameboard} from "./dom-gameboard";
import {createDomElement} from "./helper-function";
import {createInputElem} from "./name-input";
import { playerShots } from "./player-vs-computer";

function choosePlayer(playerName) {
  const chooseDiv = createDomElement("div", { class: "choose-div" });
  const btnDiv = createDomElement("div", { class: "btn-div" });
  const playAi = createDomElement("button", { class: "play-ai" });
  const playHuman = createDomElement("button", { class: "play-human" });
  const instruction = createDomElement("p");
  const alignShipDiv = createDomElement("div", { class: "align-ships" });
  const instruction2 = createDomElement("p", { class: "instruction2" });
  const axisBtn = createDomElement("button", { class: "axis-btn" });
  const continueBtn = createDomElement("button", { class: "continue-btn hide" });
  const playName = JSON.parse(localStorage.getItem("playerName"));
  instruction2.textContent = `${playName}, Place Your Ships.`;

  playAi.textContent = "PLAY AI";
  playHuman.textContent = "PLAY HUMAN";
  axisBtn.textContent = "X AXIS";
  continueBtn.textContent = "Next";
  btnDiv.append(playAi, playHuman);
  alignShipDiv.append(instruction2, axisBtn, continueBtn);
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
  const { inputDiv, startBtn, nameInput } = createInputElem(
    "Enter Human Name",
    "Continue",
  );
  document.body.replaceChild(inputDiv, chooseDiv);
  startBtn.addEventListener(
    "click",
    player1Board.bind(null, nameInput, inputDiv, playerShot, alignShipDiv),
  );
}

function player1Board(nameInput, inputDiv, playerShot, alignShipDiv) {
  const input = document.querySelector("input");
  input.classList.add("second-input");
  localStorage.setItem("player2Name", JSON.stringify(`${nameInput.value}`));
  insertBoard(alignShipDiv, inputDiv, playerShot);
}

export {choosePlayer};

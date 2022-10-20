import { humanPlayers } from "./player";
import { createGameboard } from "./dom-gameboard";
import { createDomElement } from "./helper-function";
import { createInputElem } from "./name-input";
import { playerShots } from "./player-vs-computer";
import { preventEmptyInput } from "./get-player-name";
import { addHover, resetShipHover } from "./ship-hover";
import { addRippleEffect } from "./ripple-button";

/** Creates Div container for choosing your opponent. */
function choosePlayer(playerName) {
  const chooseDiv = createDomElement("div", { class: "choose-div" });
  const btnDiv = createDomElement("div", { class: "btn-div" });
  const playAi = createDomElement("button", { class: "play-ai" });
  const playHuman = createDomElement("button", { class: "play-human" });
  const instruction = createDomElement("p");
  const alignShipDiv = createDomElement("div", { class: "align-ships" });
  const instruction2 = createDomElement("h3", { class: "instruction2" });
  const name = createDomElement("p", { class: "name1" });
  const axisBtn = createDomElement("button", { class: "axis-btn" });
  const continueBtn = createDomElement("button", {
    class: "continue-btn hide",
  });
  playAi.textContent = "PLAY AI";
  playHuman.textContent = "PLAY HUMAN";
  axisBtn.textContent = "Horizontal";
  continueBtn.textContent = "Next";
  btnDiv.append(playAi, playHuman);
  alignShipDiv.append(instruction2, axisBtn, continueBtn);
  name.textContent = `Hello ${playerName},`;
  instruction.textContent = "Choose Your Enemy.";
  chooseDiv.append(name, instruction, btnDiv);
  addListenerToBtn(
    continueBtn,
    axisBtn,
    playAi,
    alignShipDiv,
    chooseDiv,
    playHuman
  );

  return chooseDiv;
}

function addListenerToBtn(
  continueBtn,
  axisBtn,
  playAi,
  alignShipDiv,
  chooseDiv,
  playHuman
) {
  continueBtn.addEventListener("click", resetShipHover);
  const changeAxis = () =>
    (axisBtn.textContent =
      axisBtn.textContent === "Horizontal" ? "Vertical" : "Horizontal");
  axisBtn.addEventListener("click", changeAxis);
  playAi.addEventListener(
    "click",
    insertBoard.bind(null, alignShipDiv, chooseDiv, playerShots)
  );
  playHuman.addEventListener(
    "click",
    player2Name.bind(null, chooseDiv, humanPlayers, alignShipDiv)
  );
}

function insertBoard(alignShipDiv, chooseDiv, playerShot) {
  const header = document.querySelector("h1");
  const head = document.querySelector("header");
  const { boardContainer } = createGameboard();
  document.body.classList.add("fade");
  setTimeout(() => {
    header.classList.add("h1");
    head.classList.add("header");
    document.body.classList.remove("fade");
    document.body.insertBefore(alignShipDiv, chooseDiv);
    document.body.replaceChild(boardContainer, chooseDiv);
    const playerName = JSON.parse(localStorage.getItem("playerName"));
    const instruction2 = document.querySelector(".instruction2");
    instruction2.textContent = `${playerName}, Place Your Ships.`;
    addHover(".player1-grid");
    addHover(".player2-grid");
    playerShot();
    setPlayersName();
    addRippleEffect();
  }, 400);
}

function setPlayersName() {
  const player1 = document.querySelector(".player");
  const player2 = document.querySelector(".player2");
  const playerName = JSON.parse(localStorage.getItem("playerName"));
  const playerName2 = JSON.parse(localStorage.getItem("player2Name"));
  player1.textContent = `Player 1: ${playerName}`;
  player2.textContent = `Player 2: ${playerName2}`;
}

function player2Name(chooseDiv, playerShot, alignShipDiv) {
  const { inputDiv, startBtn, nameInput } = createInputElem(
    "Enter Human Name",
    "Continue"
  );
  document.body.classList.add("fade");
  setTimeout(() => {
    document.body.classList.remove("fade");
    document.body.replaceChild(inputDiv, chooseDiv);
    startBtn.addEventListener(
      "click",
      player1Board.bind(null, nameInput, inputDiv, playerShot, alignShipDiv)
    );
    addRippleEffect();
  }, 400);
}

function player1Board(nameInput, inputDiv, playerShot, alignShipDiv) {
  if (nameInput.value.trim() === "") {
    preventEmptyInput(nameInput);
    return;
  }
  const input = document.querySelector("input");
  input.classList.add("second-input");
  localStorage.setItem("player2Name", JSON.stringify(`${nameInput.value}`));
  insertBoard(alignShipDiv, inputDiv, playerShot);
}

export { choosePlayer };

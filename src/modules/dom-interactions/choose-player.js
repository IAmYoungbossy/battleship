import { humanPlayers } from "../player";
import { createGameboard } from "./dom-gameboard";
import { createDomElement } from "./helper-function";
import { createInputElem } from "./name-input";
import { playerShots } from "./player-vs-computer";

let lengthOfShip = 5;
let counter = 5;

function choosePlayer(playerName) {
  const chooseDiv = createDomElement("div", { class: "choose-div" });
  const btnDiv = createDomElement("div", { class: "btn-div" });
  const playAi = createDomElement("button", { class: "play-ai" });
  const playHuman = createDomElement("button", { class: "play-human" });
  const instruction = createDomElement("p");
  const alignShipDiv = createDomElement("div", { class: "align-ships" });
  const instruction2 = createDomElement("p", { class: "instruction2" });
  const axisBtn = createDomElement("button", { class: "axis-btn" });
  const continueBtn = createDomElement("button", {
    class: "continue-btn hide",
  });
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
  axisBtn.addEventListener("click", () => {
    axisBtn.textContent =
      axisBtn.textContent === "X AXIS" ? "Y AXIS" : "X AXIS";
  });
  playAi.addEventListener(
    "click",
    insertBoard.bind(null, alignShipDiv, chooseDiv, playerShots)
  );
  playHuman.addEventListener(
    "click",
    player2Name.bind(null, chooseDiv, humanPlayers, alignShipDiv)
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
  addHover();
  playerShot();
}
function addHover() {
  const playerBoard = document.querySelectorAll(".player1-grid");
  playerBoard.forEach(placeShipHover);
  function placeShipHover(grid, index) {
    const axis = `${index}`.split("");
    if (axis.length === 1) axis.unshift("0");
    const indexArr = [];
    const removeHoverEffect = (index) => {
      if (playerBoard) playerBoard[+index].classList.remove("grey");
    };
    const emptyIndexArr = () => {
      indexArr.forEach(removeHoverEffect);
      indexArr.splice(0);
      grid.classList.remove("red");
    };
    const setShipLength = () => {
      if (Array.from(grid.classList).includes("grey")) {
        counter--;
        if (counter === 4) lengthOfShip = 4;
        if (counter === 3) lengthOfShip = 3;
        if (counter === 2) lengthOfShip = 3;
        if (counter === 1) lengthOfShip = 2;
        if (counter === 0) lengthOfShip = 0;
      }
    };
    const addToIndexArr = () => {
      const axisBtn = document.querySelector(".axis-btn");
      grid.classList.add("red");
      let index1, index2, index3, index4, index5;
      if (axisBtn.textContent === "X AXIS") {
        index1 = `${axis[0]}${axis[1]}`;
        index2 = `${axis[0]}${+axis[1] + 1}`;
        index3 = `${axis[0]}${+axis[1] + 2}`;
        index4 = `${axis[0]}${+axis[1] + 3}`;
        index5 = `${axis[0]}${+axis[1] + 4}`;
      }
      if (axisBtn.textContent === "Y AXIS") {
        index1 = `${axis[0]}${axis[1]}`;
        index2 = `${+`${axis[0]}${axis[1]}` + 10}`;
        index3 = `${+`${axis[0]}${axis[1]}` + 20}`;
        index4 = `${+`${axis[0]}${axis[1]}` + 30}`;
        index5 = `${+`${axis[0]}${axis[1]}` + 40}`;
      }
      if (lengthOfShip === 5) {
        if (index1.length === 2) indexArr.push(index1);
        if (index2.length === 2) indexArr.push(index2);
        if (index3.length === 2) indexArr.push(index3);
        if (index4.length === 2) indexArr.push(index4);
        if (index5.length === 2) indexArr.push(index5);
      }
      if (lengthOfShip === 4) {
        if (index1.length === 2) indexArr.push(index1);
        if (index2.length === 2) indexArr.push(index2);
        if (index3.length === 2) indexArr.push(index3);
        if (index4.length === 2) indexArr.push(index4);
      }
      if (lengthOfShip === 3) {
        if (index1.length === 2) indexArr.push(index1);
        if (index2.length === 2) indexArr.push(index2);
        if (index3.length === 2) indexArr.push(index3);
      }
      if (lengthOfShip === 2) {
        if (index1.length === 2) indexArr.push(index1);
        if (index2.length === 2) indexArr.push(index2);
      }
      const addHoverEffect = (index) =>
        playerBoard[+index].classList.add("grey");
      if (indexArr.length > counter - 1) indexArr.forEach(addHoverEffect);
    };
    grid.addEventListener("click", setShipLength);
    grid.addEventListener("mouseenter", addToIndexArr);
    grid.addEventListener("mouseleave", emptyIndexArr);
  }
}
function player2Name(chooseDiv, playerShot, alignShipDiv) {
  const { inputDiv, startBtn, nameInput } = createInputElem(
    "Enter Human Name",
    "Continue"
  );
  document.body.replaceChild(inputDiv, chooseDiv);
  startBtn.addEventListener(
    "click",
    player1Board.bind(null, nameInput, inputDiv, playerShot, alignShipDiv)
  );
}
function player1Board(nameInput, inputDiv, playerShot, alignShipDiv) {
  const input = document.querySelector("input");
  input.classList.add("second-input");
  localStorage.setItem("player2Name", JSON.stringify(`${nameInput.value}`));
  insertBoard(alignShipDiv, inputDiv, playerShot);
}

export { choosePlayer };

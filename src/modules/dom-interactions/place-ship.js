/* eslint-disable no-use-before-define */
import { Gameboard } from "../gameboard";
import { placePlayerShips } from "../placeShipsOnBoard";

/** Gets ships coordinates from Gameboard and display in DOM */
function showShipsOnBoard(className) {
  const align = document.querySelector(".axis-btn");
  const squares = document.querySelectorAll(`.${className}`);
  const { board, positionShip, alignShip, receiveAttack, allShipsSunk, Arr } =
    Gameboard(placePlayerShips);

  const addListener = (square, index) => {
    square.addEventListener(
      "click",
      addBgColor.bind(this, index, positionShip, board, squares, Arr, align, alignShip)
    );
  };

  if (align) align.addEventListener("click", alignShip);
  squares.forEach(addListener.bind(this));
  return [receiveAttack, Arr, allShipsSunk];
}

/** Adds background colour for missed shots */
function addBgColor(index, positionShip, board, squares, Arr, align, alignShip) {
  positionShip(index);
  board.flat().forEach((item, index2) => {
    if (item === 1) squares[index2].classList.add("ship");
  });
  if (Arr.length === 5 && this === document) showEnemyWater();
  else if (Arr.length === 5) {
    align.removeEventListener("click", alignShip);
    align.removeEventListener("click", alignShip);
    showEnemy();
  }
}

function showEnemy() {
  const player2 = document.querySelector(".player2-board");
  const player1 = document.querySelector(".player1-board");
  const { startBtn, instruction } = createPlayBtn(
    "Continue to the next level",
    "Continue"
  );
  const showShips = () => {
    const playerName = JSON.parse(localStorage.getItem("playerName"));
    player2.classList.remove("hide");
    player1.classList.add("hide");
  };
  const showShips2 = () => {
    const playerName = JSON.parse(localStorage.getItem("player2Name"));
    player1.classList.remove("hide");
  };

  if (Array.from(player2.classList).includes("hide"))
  startBtn.addEventListener("click", showShips);
  if (!Array.from(player2.classList).includes("hide"))
  startBtn.addEventListener("click", showShips2);
}

function showEnemyWater() {
  const player = document.querySelector(".player2-board");
  const { startBtn, instruction } = createPlayBtn(
    "Press Play To Start.",
    "Play"
  );
  const showShips = () => {
    const playerName = JSON.parse(localStorage.getItem("playerName"));
    player.classList.remove("hide");
    instruction.textContent = `Waiting for ${playerName}'s shot`;
    startBtn.textContent = "RESTART GAME";
  };
  startBtn.addEventListener("click", showShips);
}

function createPlayBtn(details, play) {
  const shipAxis = document.querySelector(".align-ships");
  const instruction = shipAxis.children[0];
  const startBtn = shipAxis.children[1];
  instruction.textContent = details;
  startBtn.textContent = play;
  return { startBtn, instruction };
}

export { showShipsOnBoard };

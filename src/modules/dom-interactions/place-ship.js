/* eslint-disable no-use-before-define */
import { Gameboard } from "../gameboard";
import { placePlayerShips } from "../placeShipsOnBoard";

/** Gets ships coordinates from Gameboard and display in DOM */
function showShipsOnBoard(className) {
  const align = document.querySelector(".axis-btn");
  const squares = document.querySelectorAll(`.${className}`);
  const instruction2 = document.querySelector(".instruction2");
  const { board, positionShip, alignShip, receiveAttack, allShipsSunk, Arr } =
    Gameboard(placePlayerShips);

  if (this.classList && this.classList[0] === "player1-grid") {
    const playerName = JSON.parse(localStorage.getItem("playerName"));
    instruction2.textContent = `${playerName}, Place Your Ships.`;
  }

  const addListener = (square, index) => {
    square.addEventListener(
      "click",
      addBgColor.bind(
        this,
        index,
        positionShip,
        board,
        squares,
        Arr,
        instruction2
      )
    );
  };
  align.addEventListener("click", alignShip);
  squares.forEach(addListener.bind(this));
  return [receiveAttack, Arr, allShipsSunk];
}

/** Adds background colour for missed shots */
function addBgColor(index, positionShip, board, squares, Arr, instruction2) {
  const player1 = document.querySelector(".player1-board");
  const player2 = document.querySelector(".player2-board");
  positionShip(index);

  board.flat().forEach((item, index2) => {
    if (item === 1) squares[index2].classList.add("ship");
  });

  if (Arr.length === 5 && this === document) showEnemyWater();
  else if (Arr.length === 5) {
    if (this.classList[0] === "player2-grid")
      instruction2.textContent = "CLICK ON NEXT TO START PLAYING";
    if (this.classList[0] === "player1-grid")
      instruction2.textContent = "CLICK ON NEXT TO CONTINUE";
    showEnemy.call(this);
  }

  if (Array.from(player1.classList).includes("hide")) return;
  if (Array.from(player2.classList).includes("hide")) return;
  if (Arr.length === 5 && this !== document) {
    board.flat().forEach((item, index2) => {
      if (item === 1) squares[index2].classList.remove("ship");
    });
  }
}

function showEnemy() {
  const player2 = document.querySelector(".player2-board");
  const player1 = document.querySelector(".player1-board");
  const { startBtn, continueBtn } = createPlayBtn(
    "Continue to the next level",
    "Continue"
  );

  continueBtn.classList.remove("hide");
  startBtn.classList.add("hide");
  const showShips = () => {
    const playerName = JSON.parse(localStorage.getItem("player2Name"));
    const instruction2 = document.querySelector(".instruction2");
    const grid = document.querySelectorAll(".player1-grid");

    instruction2.textContent = `${playerName}, Place Your Ships.`;
    player2.classList.remove("hide");
    player1.classList.add("hide");
    continueBtn.classList.add("hide");
    startBtn.classList.remove("hide");

    grid.forEach((sqr) => {
      if (Array.from(sqr.classList).includes("ship"))
        sqr.classList.remove("ship");
    });
  };

  const showShips2 = () => {
    const grid = document.querySelectorAll(".player2-grid");
    grid.forEach((sqr) => {
      if (Array.from(sqr.classList).includes("ship"))
        sqr.classList.remove("ship");
    });
    player1.classList.remove("hide");
  };

  if (this.classList[0] === "player1-grid")
    continueBtn.addEventListener("click", showShips);
  if (this.classList[0] === "player2-grid")
    continueBtn.addEventListener("click", showShips2);
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

function createPlayBtn() {
  const shipAxis = document.querySelector(".align-ships");
  const continueBtn = document.querySelector(".continue-btn");
  const instruction = shipAxis.children[0];
  const startBtn = shipAxis.children[1];
  return { startBtn, instruction, continueBtn };
}

export { showShipsOnBoard };

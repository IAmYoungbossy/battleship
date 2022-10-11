/* eslint-disable no-use-before-define */
const showShipsOnBoard = require("./dom-interactions/place-ship");
const { validShots } = require("./dom-interactions/player-vs-computer");

let count = 0;
let count2 = 0;

/** Checks for valid shots on ships */
function player(className, className2) {
  const playerBoard = document.querySelectorAll(`.${className}`);
  const [receiveAttack, Arr, allShipsSunk] = showShipsOnBoard(className2);
  const addListenerToGrid = (grid, index) => grid.addEventListener(
    "click",
    shots.bind(
      null,
      Arr,
      grid,
      index,
      receiveAttack,
      playerBoard,
      allShipsSunk,
    ),
  );
  playerBoard.forEach(addListenerToGrid);
}

/** Shots by player */
function shots(
  Arr,
  grid,
  index,
  receiveAttack,
  playerBoard,
  allShipsSunk,
) {
  if (Array.from(grid.classList).includes("shots")) return;
  if (grid.classList[0] === "player1-grid" && Arr.length >= 5) {
    if (count >= 1) validShots(grid, index, receiveAttack, playerBoard, allShipsSunk);
    count += 1;
  }
  if (grid.classList[0] === "player2-grid" && Arr.length >= 5) {
    if (count2 >= 1) validShots(grid, index, receiveAttack, playerBoard, allShipsSunk);
    count2 += 1;
  }
}

function humanPlayers() {
  player("player1-grid", "player1-grid");
  player("player2-grid", "player2-grid");
}

module.exports = humanPlayers;

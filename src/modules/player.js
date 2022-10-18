import { showShipsOnBoard } from "./dom-interactions/place-ship";
import { stopHere, validShots } from "./dom-interactions/player-vs-computer";

let count = 0;
let count2 = 0;
let time = 1;

/** Checks for valid shots on ships */
function player(className, className2) {
  const playerBoard = document.querySelectorAll(`.${className}`);
  const pla = document.querySelectorAll(`.${className2}`);
  const [receiveAttack, Arr, allShipsSunk] = showShipsOnBoard.call(
    pla[0],
    className2
  );
  const addListenerToGrid = (grid, index) =>
    grid.addEventListener(
      "click",
      shots.bind(
        null,
        Arr,
        grid,
        index,
        receiveAttack,
        playerBoard,
        allShipsSunk
      )
    );
  playerBoard.forEach(addListenerToGrid);
}

/** Shots by player */
function shots(Arr, grid, index, receiveAttack, playerBoard, allShipsSunk) {
  const player1 = document.querySelector(".player1-board");
  const player2 = document.querySelector(".player2-board");
  const playerName1 = JSON.parse(localStorage.getItem("playerName"));
  const playerName2 = JSON.parse(localStorage.getItem("player2Name"));
  const instruction2 = document.querySelector(".instruction2");

  if (Array.from(grid.classList).includes("shots")) return;
  if (grid.classList[0] === "player1-grid" && Arr.length >= 5) {
    if (count >= 1 && time === 0) {
      if (Array.from(player1.classList).includes("hide")) return;
      if (Array.from(player2.classList).includes("hide")) return;
      if (stopHere === 1) return;
      instruction2.textContent = `${playerName1}, take your shot.`;
      validShots(grid, index, receiveAttack, playerBoard, allShipsSunk, instruction2, playerName2);
    }
    time = 1;
    count += 1;
  }
  if (grid.classList[0] === "player2-grid" && Arr.length >= 5) {
    if (count2 >= 1 && time === 1) {
      if (Array.from(player1.classList).includes("hide")) return;
      if (Array.from(player2.classList).includes("hide")) return;
      instruction2.textContent = `${playerName2}, take your shot.`;
      validShots(grid, index, receiveAttack, playerBoard, allShipsSunk, instruction2, playerName1);
    }
    time = 0;
    count2 += 1;
  }
}

function humanPlayers() {
  player("player1-grid", "player1-grid");
  player("player2-grid", "player2-grid");
}

export { humanPlayers };

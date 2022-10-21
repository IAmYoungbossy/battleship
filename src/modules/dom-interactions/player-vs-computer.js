import { computerShots } from "./find-empty-spot";
import { showShipsOnBoard } from "./place-ship";
import { showShipsRandomly } from "./place-ship-random";
import { validShots } from "./valid-hit";

let hit;
let time = 0;
let stopHere = 0;
let isSunkShipArr;

/** Checks for valid shots on ships */
function shots(showShips, className) {
  const playerBoard = document.querySelectorAll(`.${className}`);
  localStorage.setItem("player2Name", JSON.stringify("Computer"));
  const { receiveAttack, allShipsSunk } = showShips();
  const [receiveAttack2, , allShipsSunk2] = showShipsOnBoard.call(
    document,
    "player1-grid"
  );
  const addListenerToGrid = (grid, index) => grid.addEventListener(
      "click",
      alternateShots.bind(
        null,
        grid,
        index,
        receiveAttack,
        receiveAttack2,
        playerBoard,
        allShipsSunk,
        allShipsSunk2
      )
    );
  playerBoard.forEach(addListenerToGrid);
}

/** Alternate shots between computer and player */
function alternateShots(
  grid,
  index,
  receiveAttack,
  receiveAttack2,
  playerBoard,
  allShipsSunk,
  allShipsSunk2
) {
  if (time === 1) return;
  if (stopHere === 1) return;
  if (Array.from(grid.classList).includes("shots")) return;
  const playerName = JSON.parse(localStorage.getItem("playerName"));
  const instruction = document.querySelector(".align-ships").children[0];
  instruction.textContent = "Waiting for Computer's Shot.";
  validShots(
    grid,
    index,
    receiveAttack,
    playerBoard,
    allShipsSunk,
    instruction,
    playerName
  );
  time = 1;

  setTimeout(() => {
    time = 0;
    const AIName = "Computer";
    if (stopHere === 1) return;
    const { grid2, index2, playerBoard2 } = computerShots();
    instruction.textContent = `Waiting for ${playerName}'s Shot.`;
    const { hitCoord, isSunkShipArray } = validShots(
      grid2,
      index2,
      receiveAttack2,
      playerBoard2,
      allShipsSunk2,
      instruction,
      AIName
    );
    hit = hitCoord;
    isSunkShipArr = [...isSunkShipArray];
  }, 1500);
}

function resetPlayerVsComputer() {
  time = 0;
  stopHere = 0;
}
/** Add comment */
function setStopHere() {
  stopHere = 1;
  stopHere = 1;
}

const playerShots = shots.bind(null, showShipsRandomly, "player2-grid");
export {
  playerShots,
  stopHere,
  resetPlayerVsComputer,
  isSunkShipArr,
  hit,
  setStopHere
};

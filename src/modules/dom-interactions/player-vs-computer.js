import { announceWinner } from "./page-get-name";
import { showShipsOnBoard } from "./place-ship";
import { showShipsRandomly } from "./place-ship-random";

let hit,
  index2,
  time = 0,
  isSunkShipArray,
  visitedIndex = null,
  possibleValidShots = [],
  stopHere = 0,
  firstHit;

/** Checks for valid shots on ships */
function shots(showShips, className) {
  const playerBoard = document.querySelectorAll(`.${className}`);
  const { receiveAttack, allShipsSunk } = showShips();
  const [receiveAttack2, , allShipsSunk2] = showShipsOnBoard.call(
    document,
    "player1-grid"
  );
  const addListenerToGrid = (grid, index) =>
    grid.addEventListener(
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
  const instruction = document.querySelector(".align-ships").children[0];
  if (Array.from(grid.classList).includes("shots")) return;
  if (stopHere === 1) return;
  if (time === 1) return;
  time = 1;
  const { grid2, index2, playerBoard2 } = computerShots();
  instruction.textContent = "Waiting for Computer's Shot.";
  validShots(
    grid,
    index,
    receiveAttack,
    playerBoard,
    allShipsSunk,
    instruction
  );

  setTimeout(() => {
    time = 0;
    const playerName = JSON.parse(localStorage.getItem("playerName"));
    if (stopHere === 1) return;
    instruction.textContent = `Waiting for ${playerName}'s Shot.`;
    const { hitCoord } = validShots(
      grid2,
      index2,
      receiveAttack2,
      playerBoard2,
      allShipsSunk2,
      instruction
    );
    hit = hitCoord;
  }, 1500);
}

/** Colours valid shots red */
function validShots(
  grid,
  index,
  receiveAttack,
  playerBoard,
  allShipsSunk,
  instruction
) {
  const axis = `${index}`.split("");
  if (axis.length === 1) axis.unshift("0");

  const {
    hitCoord,
    ship5Sunk,
    ship4Sunk,
    ship3Sunk,
    ship2Sunk,
    ship1Sunk,
    ship5Coord,
    ship4Coord,
    ship3Coord,
    ship2Coord,
    ship1Coord,
  } = receiveAttack(axis);

  if (grid) grid.classList.add("shots");
  if (hitCoord) grid.classList.add("valid-shot");

  isSunkShip(ship5Sunk, ship5Coord, playerBoard);
  isSunkShip(ship4Sunk, ship4Coord, playerBoard);
  isSunkShip(ship3Sunk, ship3Coord, playerBoard);
  isSunkShip(ship2Sunk, ship2Coord, playerBoard);
  isSunkShip(ship1Sunk, ship1Coord, playerBoard);

  if (allShipsSunk()) {
    instruction.textContent = "game over.";
    stopHere = 1;
    setTimeout(() => {
      while (document.body.firstChild)
        document.body.removeChild(document.body.firstChild);
      announceWinner();
    }, 2000);
  }

  isSunkShipArray = [ship5Sunk, ship4Sunk, ship3Sunk, ship2Sunk, ship1Sunk];

  return { hitCoord };
}

/** Adds blue background colour when a ship is completely sunk */
function isSunkShip(shipSunk, shipCoord, playerBoard) {
  const addBlueBg = (item) =>
    playerBoard.forEach((square, index) => {
      if (+item.join("") === index) square.classList.add("sunk-ship");
    });
  if (shipSunk === true) shipCoord.forEach(addBlueBg);
}
function computerShots() {
  const arrIndex = [];
  const playerBoard2 = document.querySelectorAll(".player1-grid");
  const push = (square, index) => {
    if (square.classList[1] === "space") arrIndex.push(index);
  };
  playerBoard2.forEach(push);
  const ranNum = Math.floor(Math.random() * (arrIndex.length - 1));
  index2 = arrIndex[ranNum];
  findValidShots(arrIndex, ranNum, playerBoard2);
  const grid2 = playerBoard2[index2];
  if (grid2) grid2.classList.remove("space");
  return { grid2, index2, playerBoard2 };
}

function findValidShots(arrIndex, ranNum, playerBoard2) {
  if (hit && visitedIndex >= 1) {
    visitedIndex = visitedIndex - 1;
    removeFromArray(0, +possibleValidShots[0] - 1);
    removeFromArray(1, +possibleValidShots[1] + 1);
    removeFromArray(2, +possibleValidShots[2] + 10);
    removeFromArray(3, +possibleValidShots[3] - 10);
    increaseVisitedIndex(playerBoard2);
    visitedIndex++;
  }
  if (hit && visitedIndex === null) {
    firstHit = +hit[0];
    const splitHit = hit[0].split("");
    possibleValidShots = [
      splitHit[0] + (+splitHit[1] - 1),
      splitHit[0] + (+splitHit[1] + 1),
      +splitHit[0] + 1 + splitHit[1],
      +splitHit[0] - 1 + splitHit[1],
    ];
    visitedIndex = 0;
    index2 = possibleValidShots[visitedIndex];
    increaseVisitedIndex(playerBoard2);
    increaseVisitedIndex(playerBoard2);
    increaseVisitedIndex(playerBoard2);
    visitedIndex++;
  }
  if (hit === undefined && visitedIndex >= 1 && visitedIndex < 4) {
    index2 = possibleValidShots[visitedIndex];
    increaseVisitedIndex(playerBoard2);
    increaseVisitedIndex(playerBoard2);
    visitedIndex++;
  }
  if (isSunkShipArray && isSunkShipArray.includes(true)) {
    possibleValidShots.splice(0);
    index2 = arrIndex[ranNum];
    visitedIndex = null;
    firstHit = null;
  }
}
function removeFromArray(index, expression) {
  if (visitedIndex === index) {
    index2 = expression;
    possibleValidShots.splice(visitedIndex, 1, index2);
  }
}
function increaseVisitedIndex(playerBoard2) {
  if (
    +index2 < 0 ||
    +index2 > 99 ||
    isNaN(+index2) ||
    index2 === "010" ||
    Array.from(playerBoard2[+index2].classList).includes("shots")
  ) {
    visitedIndex++;
  }
  index2 = +possibleValidShots[visitedIndex];
  if (
    firstHit &&
    playerBoard2[+index2] &&
    Array.from(playerBoard2[+index2].classList).includes("ship") &&
    playerBoard2[+index2].classList[3] !== playerBoard2[firstHit].classList[2]
  ) {
    visitedIndex++;
  }
  index2 = +possibleValidShots[visitedIndex];
}

const playerShots = shots.bind(null, showShipsRandomly, "player2-grid");
export { playerShots, validShots, stopHere };

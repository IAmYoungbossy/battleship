import { showShipsOnBoard } from "./place-ship";
import { showShipsRandomly } from "./place-ship-random";

let hit;
let index2;
let time = 0;
let isSunkShipArray;
let visitedIndex = null;
let possibleValidShots = [];

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
  if (Array.from(grid.classList).includes("shots")) return;
  if (time === 1) return;
  time = 1;
  const { grid2, index2, playerBoard2 } = computerShots();
  const instruction = document.querySelector(".align-ships").children[0];
  instruction.textContent = "Waiting for Computer's Shot.";
  validShots(grid, index, receiveAttack, playerBoard, allShipsSunk);

  setTimeout(() => {
    time = 0;
    const playerName = JSON.parse(localStorage.getItem("playerName"));
    instruction.textContent = `Waiting for ${playerName}'s Shot.`;
    const { hitCoord } = validShots(
      grid2,
      index2,
      receiveAttack2,
      playerBoard2,
      allShipsSunk2
    );
    hit = hitCoord;
  }, 1500);
}

/** Colours valid shots red */
function validShots(grid, index, receiveAttack, playerBoard, allShipsSunk) {
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

  if (allShipsSunk()) console.log("Works");
  if (grid) grid.classList.add("shots");
  if (hitCoord) grid.classList.add("valid-shot");

  isSunkShip(ship5Sunk, ship5Coord, playerBoard);
  isSunkShip(ship4Sunk, ship4Coord, playerBoard);
  isSunkShip(ship3Sunk, ship3Coord, playerBoard);
  isSunkShip(ship2Sunk, ship2Coord, playerBoard);
  isSunkShip(ship1Sunk, ship1Coord, playerBoard);
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

function findValidShots(arrIndex, ranNum) {
  if (hit && visitedIndex >= 1) {
    visitedIndex = visitedIndex - 1;
    if (visitedIndex === 0) {
      index2 = +possibleValidShots[0] - 1;
      possibleValidShots.splice(visitedIndex, 1, index2);
    }
    if (visitedIndex === 1) {
      index2 = +possibleValidShots[1] + 1;
      possibleValidShots.splice(visitedIndex, 1, index2);
    }
    if (visitedIndex === 2) {
      index2 = +possibleValidShots[2] + 10;
      possibleValidShots.splice(visitedIndex, 1, index2);
    }
    if (visitedIndex === 3) {
      index2 = +possibleValidShots[3] - 10;
      possibleValidShots.splice(visitedIndex, 1, index2);
    }
    if (+index2 < 0 || +index2 > 99 || isNaN(+index2) || index2 === "010")
      visitedIndex++;
    index2 = +possibleValidShots[visitedIndex];
    visitedIndex++;
  }
  if (hit && visitedIndex === null) {
    const splitHit = hit[0].split("");
    possibleValidShots = [
      splitHit[0] + (+splitHit[1] - 1),
      splitHit[0] + (+splitHit[1] + 1),
      +splitHit[0] + 1 + splitHit[1],
      +splitHit[0] - 1 + splitHit[1],
    ];
    visitedIndex = 0;
    index2 = possibleValidShots[visitedIndex];
    if (+index2 < 0 || +index2 > 99 || isNaN(+index2) || index2 === "010")
      visitedIndex++;
    index2 = +possibleValidShots[visitedIndex];
    visitedIndex++;
  }

  if (hit === undefined && visitedIndex >= 1 && visitedIndex < 4) {
    index2 = possibleValidShots[visitedIndex];
    if (+index2 < 0 || +index2 > 99 || isNaN(+index2) || index2 === "010")
      visitedIndex++;
    index2 = possibleValidShots[visitedIndex];
    if (+index2 < 0 || +index2 > 99 || isNaN(+index2) || index2 === "010")
      visitedIndex++;
    index2 = +possibleValidShots[visitedIndex];
    visitedIndex++;
  }

  if (isSunkShipArray && isSunkShipArray.includes(true)) {
    possibleValidShots.splice(0);
    index2 = arrIndex[ranNum];
    visitedIndex = null;
  }
}

const playerShots = shots.bind(null, showShipsRandomly, "player2-grid");
export { playerShots, validShots };

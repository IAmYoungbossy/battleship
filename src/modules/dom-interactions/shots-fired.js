/* eslint-disable no-use-before-define */
const showShipsOnBoard = require("./place-ship");
const showShipsRandomly = require("./place-ship-random");

/** Checks for valid shots on ships */
function shots(showShips, className) {
  const playerBoard = document.querySelectorAll(`.${className}`);
  const { receiveAttack, allShipsSunk } = showShips();
  const [receiveAttack2, allShipsSunk2] = showShipsOnBoard();
  const addListenerToGrid = (grid, index) => grid.addEventListener(
    "click",
    colourValidShots.bind(
      null,
      grid,
      index,
      receiveAttack,
      receiveAttack2,
      playerBoard,
      allShipsSunk,
      allShipsSunk2,
    ),
  );

  playerBoard.forEach(addListenerToGrid);
}

function colourValidShots(
  grid,
  index,
  receiveAttack,
  receiveAttack2,
  playerBoard,
  allShipsSunk,
  allShipsSunk2,
) {
  if (Array.from(grid.classList).includes("shots")) return;
  const { grid2, index2, playerBoard2 } = computerShots();
  validShots(grid, index, receiveAttack, playerBoard, allShipsSunk);
  validShots(grid2, index2, receiveAttack2, playerBoard2, allShipsSunk2);
}

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
  grid.classList.add("shots");
  if (hitCoord) grid.style.background = "red";
  isSunkShip(ship5Sunk, ship5Coord, playerBoard);
  isSunkShip(ship4Sunk, ship4Coord, playerBoard);
  isSunkShip(ship3Sunk, ship3Coord, playerBoard);
  isSunkShip(ship2Sunk, ship2Coord, playerBoard);
  isSunkShip(ship1Sunk, ship1Coord, playerBoard);
}

/** Adds background colour when a ship is completely sunk */
function isSunkShip(shipSunk, shipCoord, playerBoard) {
  if (shipSunk === true) {
    shipCoord.forEach((item) => {
      playerBoard.forEach((square, ind) => {
        if (+item.join("") === ind) square.style.background = "blue";
      });
    });
  }
}

function computerShots() {
  const arrIndex = [];
  const playerBoard2 = document.querySelectorAll(".player1-grid");
  playerBoard2.forEach((square, index) => {
    if (square.classList[1] === "space") arrIndex.push(index);
  });
  const ranNum = Math.floor(Math.random() * (arrIndex.length - 1));
  const index2 = arrIndex[ranNum];
  const grid2 = playerBoard2[index2];
  grid2.classList.remove("space");
  return { grid2, index2, playerBoard2 };
}

const playerShots = shots.bind(null, showShipsRandomly, "player2-grid");
module.exports = playerShots;

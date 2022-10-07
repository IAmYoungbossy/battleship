/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
const showShipsOnBoard = require("./place-ship");
const showShipsRandomly = require("./place-ship-random");

let count = 0;
/** Checks for valid shots on ships */
function shots(showShips, className) {
  const playerBoard = document.querySelectorAll(`.${className}`);
  const { receiveAttack, Arr, allShipsSunk } = showShips();

  const addListenerToGrid = (grid, index) => grid.addEventListener(
    "click",
    colourValidShots.bind(
      null,
      grid,
      index,
      Arr,
      receiveAttack,
      playerBoard,
      allShipsSunk,
    ),
  );

  playerBoard.forEach(addListenerToGrid);
}

function colourValidShots(
  grid,
  index,
  Arr,
  receiveAttack,
  playerBoard,
  allShipsSunk,
) {
  if (grid.classList[0] === "player1-grid" && Arr.length === 5 && count >= 5) {
    validShots(grid, index, receiveAttack, playerBoard, allShipsSunk);
  }
  if (grid.classList[0] === "player2-grid") {
    randomShots();
    validShots(grid, index, receiveAttack, playerBoard, allShipsSunk);
  }
  count += 1;
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

function randomShots() {
  const freeSpotArr = [];
  const humanPlayer = document.querySelectorAll(".player1-grid");
  humanPlayer.forEach((square, index) => {
    if (square.classList[1] === "space") {
      freeSpotArr.push(index);
    }
  });
  const randomNum = Math.floor(Math.random() * (freeSpotArr.length - 1));
  console.log(freeSpotArr[randomNum]);
  console.log(humanPlayer[freeSpotArr[randomNum]]);
  humanPlayer[freeSpotArr[randomNum]].classList.remove("space");
  setTimeout(() => {
    humanPlayer[freeSpotArr[randomNum]].classList.add("shots");
  }, 1000);
}

const computerShots = shots.bind(null, showShipsOnBoard, "player1-grid");
const playerShots = shots.bind(null, showShipsRandomly, "player2-grid");

module.exports = {
  computerShots,
  playerShots,
};

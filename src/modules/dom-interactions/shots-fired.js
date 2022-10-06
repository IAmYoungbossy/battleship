/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
const showShipsOnBoard = require("./place-ship");
const showShipsRandomly = require("./place-ship-random");

/** Checks for valid shots on ships */
function shots(showShips, className) {
  const playerBoard = document.querySelectorAll(`.${className}`);
  const { receiveAttack, Arr, allShipsSunk } = showShips();
  let count = 0;
  const validShots = (grid, index) => {
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
    grid.style.background = "purple";
    if (hitCoord) grid.style.background = "red";
    isSunkShip(ship5Sunk, ship5Coord, playerBoard);
    isSunkShip(ship4Sunk, ship4Coord, playerBoard);
    isSunkShip(ship3Sunk, ship3Coord, playerBoard);
    isSunkShip(ship2Sunk, ship2Coord, playerBoard);
    isSunkShip(ship1Sunk, ship1Coord, playerBoard);
  };

  const colourValidShots = (grid, index) => {
    if (
      grid.classList[0] === "player1-grid"
    && Arr.length === 5
    && count >= 5
    ) validShots(grid, index);
    if (grid.classList[0] === "player2-grid") validShots(grid, index);
    count += 1;
  };

  const addListenerToGrid = (grid, index) => {
    grid.addEventListener("click", colourValidShots.bind(null, grid, index));
  };
  playerBoard.forEach(addListenerToGrid);
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

const computerShots = shots.bind(null, showShipsOnBoard, "player1-grid");
const playerShots = shots.bind(null, showShipsRandomly, "player2-grid");

module.exports = {
  computerShots,
  playerShots,
};

/* eslint-disable no-use-before-define */
const Gameboard = require("../gameboard");
const placeShips = require("../placeShipsOnBoard");

/** Gets ships coordinates from Gameboard and display in DOM */
function showShipsOnBoard(className) {
  const align = document.querySelector(".align-ships");
  const squares = document.querySelectorAll(`.${className}`);
  const {
    board, positionShip, alignShip, receiveAttack, allShipsSunk, Arr,
  } = Gameboard(placeShips.placePlayerShips);

  const addListener = (square, index) => {
    square.addEventListener(
      "click",
      addBgColor.bind(null, index, positionShip, board, squares, Arr),
    );
  };

  align.addEventListener("click", alignShip);
  squares.forEach(addListener);
  return [receiveAttack, Arr, allShipsSunk];
}

/** Adds background colour for missed shots */
function addBgColor(index, positionShip, board, squares, Arr) {
  positionShip(index);
  board.flat().forEach((item, index2) => {
    if (item === 1) squares[index2].classList.add("ship");
  });

  if (Arr.length === 5) showEnemyWater();
}

function showEnemyWater() {
  const player = document.querySelector(".player2-board");
  const startBtn = createPlayBtn();
  const showShips = () => player.classList.add("show");
  startBtn.addEventListener("click", showShips);
}

function createPlayBtn() {
  const shipAxis = document.querySelector(".align-ships");
  const instruction = shipAxis.children[0];
  const startBtn = shipAxis.children[1];
  instruction.textContent = "Press Play To Start.";
  startBtn.textContent = "Play";
  return startBtn;
}

module.exports = showShipsOnBoard;

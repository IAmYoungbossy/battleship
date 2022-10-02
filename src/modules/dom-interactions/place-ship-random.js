const create2DArray = require("../2d-array");
const Gameboard = require("../gameboard");

function showRandomShipsOnBoard() {
  const board = create2DArray(10);
  const align = "X";
  const Arr = [];
  let shipLenght = 0;

  while (Arr.length < 5) {
    if (Arr.length === 0) shipLenght = 5;
    if (Arr.length === 1) shipLenght = 4;
    if (Arr.length === 2) shipLenght = 3;
    if (Arr.length === 3) shipLenght = 3;
    if (Arr.length === 4) shipLenght = 2;

    const index = Math.floor(Math.random() * 100);
    const coord = `${index}`.split("");
    if (coord.length === 1) coord.unshift("0");
    const shipCoord = Gameboard(+coord[0], +coord[1], shipLenght, align, board);
    if (shipCoord.length !== 0) Arr.push(shipCoord);
  }
  return board;
}
console.table(showRandomShipsOnBoard());
module.exports = showRandomShipsOnBoard;

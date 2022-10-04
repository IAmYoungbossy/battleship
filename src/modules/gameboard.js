/* eslint-disable no-use-before-define */
/* eslint-disable no-return-assign */
const create2DArray = require("./2d-array");
const shipAxis = require("./shp-axis");

function Gameboard() {
  const alignShip = () => (align = align === "X" ? "Y" : "X");
  const board = create2DArray(10);
  let align = "X";
  const Arr = [];

  const positionShip = (index) => {
    let shipLenght;
    if (Arr.length > 4) return;
    if (Arr.length === 0) shipLenght = 5;
    if (Arr.length === 1) shipLenght = 4;
    if (Arr.length === 2) shipLenght = 3;
    if (Arr.length === 3) shipLenght = 3;
    if (Arr.length === 4) shipLenght = 2;
    const axis = `${index}`.split("");
    if (axis.length === 1) axis.unshift("0");
    const coords = shipAxis(+axis[0], +axis[1], shipLenght, align, board);
    if (coords.length !== 0) Arr.push({ shipLenght, axis, align });
  };
  return { board, positionShip, alignShip };
}

module.exports = Gameboard;

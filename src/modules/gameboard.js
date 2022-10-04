/* eslint-disable no-use-before-define */
/* eslint-disable no-return-assign */
const create2DArray = require("./2d-array");
const shipAxis = require("./shp-axis");

function Gameboard() {
  const alignShip = () => (align = align === "X" ? "Y" : "X");
  const board = create2DArray(10);
  const Arr = [];
  let align = "X";

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
    if (coords.length !== 0) {
      Arr.push(coords);
    }
  };

  const receiveAttack = (attack) => {
    const [ship5, ship4, ship3, ship2, ship1] = Arr;
    [ship5, ship4, ship3, ship2, ship1].forEach((ship) => {
      ship.forEach((coordinate, index) => {
        if (attack === coordinate) ship.splice(index, 1);
      });
    });
  };

  return {
    board,
    positionShip,
    alignShip,
    receiveAttack,
  };
}

module.exports = Gameboard;

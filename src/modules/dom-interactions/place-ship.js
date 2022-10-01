const create2DArray = require("../2d-array");
const Gameboard = require("../gameboard");

function showShipsOnBoard() {
  const header = document.querySelector("h1");
  const squares = document.querySelectorAll(".grid");
  const board = create2DArray(10);
  let align = "X";
  const Arr = [];
  let shipLenght;

  const shipAlignment = () => {
    align = align === "X" ? "Y" : "X";
  };

  const shipBackground = (item, index2) => {
    if (item === 1) squares[index2].classList.add("ship");
  };

  const setShipLength = () => {
    for (let i = 0; i < 1; i += 1) {
      if (Arr.length === 0) shipLenght = 5;
      if (Arr.length === 1) shipLenght = 4;
      if (Arr.length === 2) shipLenght = 3;
      if (Arr.length === 3) shipLenght = 3;
      if (Arr.length === 4) shipLenght = 2;
    }
  };

  const placeShip = (square, index) => {
    const placeShipHandler = () => {
      if (Arr.length > 4) return;
      setShipLength();
      const coord = `${index}`.split("");
      if (coord.length === 1) coord.unshift("0");

      const shipCoord = Gameboard(
        +coord[0],
        +coord[1],
        shipLenght,
        align,
        board,
      );
      if (shipCoord.length !== 0) Arr.push(shipCoord);
      board.flat().forEach(shipBackground);
    };
    square.addEventListener("click", placeShipHandler);
  };
  header.addEventListener("click", shipAlignment);
  squares.forEach(placeShip);
}

module.exports = showShipsOnBoard;

const shipAxis = require("./shp-axis");

function placePlayerShips(Arr, index, align, board, shipArr) {
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
    shipArr.push({ XY: [+axis[0], +axis[1]], align, shipLenght });
  }
}

module.exports = placePlayerShips;

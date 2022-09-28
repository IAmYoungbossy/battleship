const getShipCoordinates = require("./getShipCoordinates");
const hit = require("./hit");
const sink = require("./sink");

function Ship(array, length, align, hitCoord) {
  const shipCoord = getShipCoordinates(array, length, align);
  const isHit = hit(shipCoord, hitCoord);
  const isSunk = sink(isHit);
  return isSunk;
}

module.exports = Ship;

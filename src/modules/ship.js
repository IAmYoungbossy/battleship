const getShipCoordinates = require("./getShipCoordinates");
const hit = require("./hit");
const sink = require("./sink");

function Ship(array, length, align, receiveAttack) {
  const shipCoord = getShipCoordinates(array, length, align);
  const isHit = hit(shipCoord, receiveAttack);
  const isSunk = sink(isHit);
  return { shipCoord, isSunk };
}

module.exports = Ship;

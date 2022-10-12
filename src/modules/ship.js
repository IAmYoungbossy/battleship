/* eslint-disable no-restricted-syntax */
import {getShipCoordinates} from "./getShipCoordinates";

function Ship(array, length, align) {
  const shipCoord = getShipCoordinates(array, length, align);
  if (!Array.isArray(shipCoord) && !shipCoord.length > 0) return false;
  const isSunk = (coord, hitCoord) => {
    for (const XY of shipCoord) {
      if (hitCoord.join("") === XY.join("")) if (coord.length <= 0) return true;
    }
    return coord.length;
  };
  return { shipCoord, isSunk };
}

export {Ship};

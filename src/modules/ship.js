/* eslint-disable no-plusplus */
function getShipCoordinates(array, length, align) {
  const shipCoordinates = [array];
  if (align === "Y") {
    for (let i = 1; i < length; i++) {
      shipCoordinates.push([array[0] + i, array[1]]);
    }
  } else {
    for (let i = 1; i < length; i++) {
      shipCoordinates.push([array[0], array[1] + i]);
    }
  }
  return shipCoordinates;
}

module.exports = getShipCoordinates;

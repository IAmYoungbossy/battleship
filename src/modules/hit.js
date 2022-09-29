/* eslint-disable nonblock-statement-body-position */
/* eslint-disable curly */
function hit(shipCoord, hitCoord) {
  const coordinates = [...shipCoord];

  coordinates.forEach((coord, index) => {
    hitCoord.forEach((hitPoint) => {
      if (coord[0] === hitPoint[0] && coord[1] === hitPoint[1])
        coordinates.splice(index, 1);
    });
  });

  return coordinates;
}

module.exports = hit;

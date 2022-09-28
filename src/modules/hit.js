function hit(shipCoord, hitCoord) {
  const coordinates = [...shipCoord];

  coordinates.forEach((coord, index) => {
    if (hitCoord && coord[0] === hitCoord[0] && coord[1] === hitCoord[1]) {
      coordinates.splice(index, 1);
    }
  });

  return coordinates;
}

module.exports = hit;

/* eslint-disable no-plusplus */
import {Ship} from "./ship";
import {checkValidMove} from "./valid-move";

function shipAxis(x, y, length, align, board, receiveAttack) {
  const ship = Ship([x, y], length, align, receiveAttack).shipCoord;
  const shipCoords = checkValidMove(ship, board);
  const arrayCoord = [];

  arrayCoord.push(shipCoords);
  arrayCoord.forEach((coord, index) => {
    if (!coord) arrayCoord.splice(index, 1);
  });

  return arrayCoord;
}

export {shipAxis};

import {Gameboard} from "../gameboard";
import { placeComputerShips } from "../placeShipsOnBoard";

function showShipsRandomly() {
  const {
    positionShip, receiveAttack, allShipsSunk, Arr,
  } = Gameboard(placeComputerShips);
  positionShip();
  return { receiveAttack, allShipsSunk, Arr };
}

export {showShipsRandomly};

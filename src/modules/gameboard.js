import {create2DArray} from "./2d-array";
import {Ship} from "./ship";

function Gameboard(placePlayerShips) {
  const Arr = [];
  let align = "X";
  const shipArr = [];
  const board = create2DArray(10);
  const alignShip = () => (align = align === "X" ? "Y" : "X");

  const positionShip = (index) => {
    placePlayerShips(Arr, board, shipArr, index, align);
  };

  const receiveAttack = (attack) => {
    let hitCoord;
    let ship5Sunk;
    let ship4Sunk;
    let ship3Sunk;
    let ship2Sunk;
    let ship1Sunk;
    let ship5Coord;
    let ship4Coord;
    let ship3Coord;
    let ship2Coord;
    let ship1Coord;

    const [shipFive, shipFour, shipThree, shipTwo, shipOne] = shipArr;
    const [ship5, ship4, ship3, ship2, ship1] = Arr;
    const array = [ship5, ship4, ship3, ship2, ship1].flat();

    array.forEach((ship) => {
      ship.forEach((coordinate, index) => {
        if (+attack.join("") === +coordinate) {
          hitCoord = ship.splice(index, 1);
          const shi5 = Ship(shipFive.XY, shipFive.shipLenght, shipFive.align);
          ship5Sunk = shi5.isSunk(ship, hitCoord);
          ship5Coord = shi5.shipCoord;
          const shi4 = Ship(shipFour.XY, shipFour.shipLenght, shipFour.align);
          ship4Sunk = shi4.isSunk(ship, hitCoord);
          ship4Coord = shi4.shipCoord;
          const shi3 = Ship(
            shipThree.XY,
            shipThree.shipLenght,
            shipThree.align,
          );
          ship3Sunk = shi3.isSunk(ship, hitCoord);
          ship3Coord = shi3.shipCoord;
          const shi2 = Ship(shipTwo.XY, shipTwo.shipLenght, shipTwo.align);
          ship2Sunk = shi2.isSunk(ship, hitCoord);
          ship2Coord = shi2.shipCoord;
          const shi1 = Ship(shipOne.XY, shipOne.shipLenght, shipOne.align);
          ship1Sunk = shi1.isSunk(ship, hitCoord);
          ship1Coord = shi1.shipCoord;
        }
      });
    });
    return {
      hitCoord,
      ship5Sunk,
      ship4Sunk,
      ship3Sunk,
      ship2Sunk,
      ship1Sunk,
      ship5Coord,
      ship4Coord,
      ship3Coord,
      ship2Coord,
      ship1Coord,
    };
  };

  const allShipsSunk = () => {
    const [ship5, ship4, ship3, ship2, ship1] = Arr.flat();
    if (ship5.length === 0
    && ship4.length === 0
    && ship3.length === 0
    && ship2.length === 0
    && ship1.length === 0
    ) return true;
    return false;
  };

  return {
    Arr,
    board,
    shipArr,
    alignShip,
    allShipsSunk,
    positionShip,
    receiveAttack,
  };
}

export {Gameboard};

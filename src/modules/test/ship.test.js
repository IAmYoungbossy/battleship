import { Ship } from "../ship";

describe("Ship", () => {
    test("returns the correct ship coordinates and isSunk function", () => {
      const result = Ship([0, 0], 3, "X");
      expect(result).toEqual({ shipCoord: [[0, 0], [0, 1], [0, 2]], isSunk: expect.any(Function) });
    });
  
    test("returns false if the input array is not valid", () => {
      const result = Ship([], 3, "X");
      expect(result).toBe(false);
    });
  
    test("isSunk function returns true when all coordinates of ship are hit", () => {
      const ship = Ship([0, 0], 3, "X");
      ship.shipCoord.forEach((coord) => ship.isSunk([], coord));
      expect(ship.isSunk([], [0, 0])).toBe(true);
    });
  
    test("isSunk function returns remaining length of ship when not all coordinates are hit", () => {
      const ship = Ship([0, 0], 3, "X");
      ship.isSunk([], ship.shipCoord[0]);
      expect(ship.isSunk([], ship.shipCoord[0])).toBe(2);
    });
  });
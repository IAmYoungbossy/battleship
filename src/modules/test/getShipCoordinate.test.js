/* eslint-disable no-undef */
import {getShipCoordinates} from "../getShipCoordinates";

describe("getShipCoordinates", () => {
  test("returns the correct coordinates for a ship placed horizontally", () => {
    const result = getShipCoordinates([0, 0], 3, "X");
    expect(result).toEqual([[0, 0], [0, 1], [0, 2]]);
  });

  test("returns the correct coordinates for a ship placed vertically", () => {
    const result = getShipCoordinates([1, 2], 4, "Y");
    expect(result).toEqual([[1, 2], [2, 2], [3, 2], [4, 2]]);
  });

  test("returns false if the input array is not valid", () => {
    const result = getShipCoordinates([], 4, "Y");
    expect(result).toBe(false);
  });
});
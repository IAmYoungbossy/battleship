/* eslint-disable no-undef */
import {shipCoordinates} from "../getShipCoordinates";

test("shipCoordinates([0, 0], 5, 'X') should return [[0,0], [0, 1], [0, 2], [0, 3], [0, 4]] coordinates", () => {
  expect(shipCoordinates([0, 0], 5, "X")).toEqual([
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
  ]);
  expect(shipCoordinates([0, 0], 5, "Y")).toEqual([
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
  ]);
});

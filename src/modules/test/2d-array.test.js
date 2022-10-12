/* eslint-disable no-undef */
import {create2DArray} from "../2d-array";

test("[[0, 0, 0], [0, 0, 0], [0, 0, 0]] toEqual [[0, 0, 0], [0, 0, 0], [0, 0, 0]]", () => {
  expect(create2DArray(3)).toEqual([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
});

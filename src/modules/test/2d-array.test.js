/* eslint-disable no-undef */
import {create2DArray} from "../2d-array";

describe("create2DArray", () => {
  test("creates a 2D array of the specified size", () => {
    const result = create2DArray(3);
    expect(result).toEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
  });

  test("creates a 2D array of the specified size", () => {
    const result = create2DArray(4);
    expect(result).toEqual([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]);
  });
});

/* eslint-disable no-undef */
const create2DArray = require("../2d-array");

test("[[0, 0, 0], [0, 0, 0], [0, 0, 0]] toEqual [[0, 0, 0], [0, 0, 0], [0, 0, 0]]", () => {
  expect(create2DArray(3)).toEqual([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
});

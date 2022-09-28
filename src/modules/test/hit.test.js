/* eslint-disable no-undef */
const hit = require("../hit");

test("hit([[1, 2], [2, 2], [3, 2], [4, 2], [5, 2]], [3, 2]) should return [[1, 2], [2, 2], [4, 2], [5, 2]]", () => {
  expect(
    hit(
      [
        [1, 2],
        [2, 2],
        [3, 2],
        [4, 2],
        [5, 2],
      ],
      [3, 2],
    ),
  ).toEqual([
    [1, 2],
    [2, 2],
    [4, 2],
    [5, 2],
  ]);

  expect(
    hit(
      [
        [1, 2],
        [2, 2],
        [4, 2],
        [5, 2],
      ],
      [5, 2],
    ),
  ).toEqual([
    [1, 2],
    [2, 2],
    [4, 2],
  ]);
});

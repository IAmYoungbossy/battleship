/* eslint-disable no-undef */
const sink = require("../sink");

test("sink([]) toBeTruthy", () => {
  expect(sink([])).toBeTruthy();
  expect(sink([2])).toBeFalsy();
});

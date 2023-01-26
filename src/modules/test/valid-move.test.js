import { checkValidMove } from "../valid-move";
import { create2DArray } from "../2d-array";

describe("checkValidMove", () => {
    let counter = 0;
    test("places a ship on the board with valid coordinates", () => {
      const board = create2DArray(10);
      const result = checkValidMove(3, [[1, 2], [1, 3], [1, 4]], board);
      expect(result).toEqual(["12", "13", "14"]);
      expect(board[1][2]).toBe(3);
      expect(board[1][3]).toBe(3);
      expect(board[1][4]).toBe(3);
    });
  
    test("does not place a ship on the board with invalid coordinates", () => {
      const board = create2DArray(10);
      board[1][2] = 3;
      const result = checkValidMove(3, [[1, 2], [1, 3], [1, 4]], board);
      expect(result).toBeUndefined();
      expect(board[1][2]).toBe(3);
      expect(board[1][3]).toBe(0);
      expect(board[1][4]).toBe(0);
    });
  
    test("increments counter variable when num is 3 and resets it when it reaches 2", () => {
      const board = create2DArray(10);
      checkValidMove(3, [[1, 2], [1, 3], [1, 4]], board);
      checkValidMove(3, [[1, 5], [1, 6], [1, 7]], board);
      expect(counter).toBe(0);
    });
  });
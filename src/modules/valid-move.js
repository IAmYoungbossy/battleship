/* eslint-disable consistent-return */
function checkValidMove(num, ship, boardArray) {
  const domBoardArrray = [];
  if (!ship) return false;
  for (let i = ship.length - 1; i >= 0; i -= 1) {
    if (
      +ship[i][0] > 9 ||
      +ship[i][1] > 9 ||
      boardArray[+ship[i][0]][+ship[i][1]] !== 0
    ) {
      return;
    }
  }
  for (let i = 0; i < ship.length; i += 1) {
    if (
      boardArray[+ship[i][0]][+ship[i][1]] === 2 ||
      boardArray[+ship[i][0]][+ship[i][1]] === 3 ||
      boardArray[+ship[i][0]][+ship[i][1]] === 4 ||
      boardArray[+ship[i][0]][+ship[i][1]] === 5
    )
      return;
  }
  for (let i = 0; i < ship.length; i += 1) {
    boardArray[+ship[i][0]][+ship[i][1]] = num;
    domBoardArrray.push(`${ship[i][0]}${ship[i][1]}`);
  }

  return domBoardArrray;
}

export { checkValidMove };

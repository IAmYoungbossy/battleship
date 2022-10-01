/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
function checkValidMove(ship, boardArray) {
  const domBoardArrray = [];

  if (!ship) return false;
  for (let i = ship.length - 1; i >= 0; i -= 1) {
    if (
      +ship[i][0] > 9
			|| +ship[i][1] > 9
			|| boardArray[+ship[i][0]][+ship[i][1]] !== 0
    ) { return; }
  }
  for (let i = 0; i < ship.length; i += 1) {
    if (boardArray[+ship[i][0]][+ship[i][1]] === 1) return;
  }
  for (let i = 0; i < ship.length; i += 1) {
    boardArray[+ship[i][0]][+ship[i][1]] = 1;
    domBoardArrray.push(`${ship[i][0]}${ship[i][1]}`);
  }

  return domBoardArrray;
}

module.exports = checkValidMove;

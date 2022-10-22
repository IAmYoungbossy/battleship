import { hit, isSunkShipArr } from "./player-vs-computer";

let index2;
let visitedIndex = null;
let possibleValidShots = [];
let currentShipClass;
let firstHit;

function computerShots() {
  const arrIndex = [];
  const playerBoard2 = document.querySelectorAll(".player1-grid");
  const pushIt = (square, index) => {
    if (square.classList[1] === "space") arrIndex.push(index);
  };
  playerBoard2.forEach(pushIt);
  const ranNum = Math.floor(Math.random() * (arrIndex.length - 1));
  index2 = arrIndex[ranNum];
  findValidHitOnShip(arrIndex, ranNum, playerBoard2);
  const grid2 = playerBoard2[+index2];
  if (grid2) grid2.classList.remove("space");
  return { grid2, index2, playerBoard2 };
}

function findValidHitOnShip(arrIndex, ranNum, playerBoard2) {
  if (hit && visitedIndex >= 1) {
    visitedIndex = visitedIndex - 1;
    removeFromArray(0, +possibleValidShots[0] - 1);
    removeFromArray(1, +possibleValidShots[1] + 1);
    removeFromArray(2, +possibleValidShots[2] + 10);
    removeFromArray(3, +possibleValidShots[3] - 10);
    increaseVisitedIndex(playerBoard2);
    visitedIndex += 1;
  }
  if (hit && visitedIndex === null) {
    firstHit = +hit[0];
    const splitHit = hit[0].split("");
    possibleValidShots = [
      splitHit[0] + (+splitHit[1] - 1),
      splitHit[0] + (+splitHit[1] + 1),
      +splitHit[0] + 1 + splitHit[1],
      +splitHit[0] - 1 + splitHit[1],
    ];
    visitedIndex = 0;
    increaseVisitedIndex(playerBoard2);
    increaseVisitedIndex(playerBoard2);
    increaseVisitedIndex(playerBoard2);
    visitedIndex += 1;
  }
  if (hit === undefined && visitedIndex >= 1 && visitedIndex < 4) {
    increaseVisitedIndex(playerBoard2);
    increaseVisitedIndex(playerBoard2);
    visitedIndex += 1;
  }
  if (isSunkShipArr && isSunkShipArr.includes(true)) {
    possibleValidShots = [];
    index2 = arrIndex[ranNum];
    visitedIndex = null;
    firstHit = null;
  }
}

function removeFromArray(index, expression) {
  if (visitedIndex === index) {
    index2 = expression;
    possibleValidShots.splice(index, 1, index2);
  }
}

function increaseVisitedIndex(playerBoard2) {
  index2 = possibleValidShots[visitedIndex];
  if (+index2 < 0) {
    visitedIndex += 1;
    index2 = possibleValidShots[visitedIndex];
  } else if (+index2 > 99) {
    visitedIndex += 1;
    index2 = possibleValidShots[visitedIndex];
  } else if (Number.isNaN(+index2)) {
    visitedIndex += 1;
    index2 = possibleValidShots[visitedIndex];
  } else if (index2 === "010") {
    visitedIndex += 1;
    index2 = possibleValidShots[visitedIndex];
  } else if (
    playerBoard2[+index2] &&
    Array.from(playerBoard2[+index2].classList).includes("shots")
  ) {
    visitedIndex += 1;
    index2 = possibleValidShots[visitedIndex];
  }
  if (
    firstHit &&
    playerBoard2[+index2] &&
    Array.from(playerBoard2[+index2].classList).includes("ship")
  ) {
    Array.from(playerBoard2[firstHit].classList).forEach((klass) => {
      const splitToArray = klass.split("");
      const lastLetter = splitToArray[klass.length - 1];
      if (!Number.isNaN(+lastLetter)) currentShipClass = klass;
    });
    if (
      !Array.from(playerBoard2[+index2].classList).includes(currentShipClass)
    ) {
      visitedIndex += 1;
      index2 = possibleValidShots[visitedIndex];
    }
  }
}

export { computerShots };

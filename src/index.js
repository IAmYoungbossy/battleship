import "./modules/style/style.css";

const myModule = require("./modules/dom-interactions/dom-gameboard");
const Ship = require("./modules/ship");

myModule.createGameboard();
myModule.showShipsOnBoard();
console.log(Ship([1, 2], 5, "Y", [1, 2]));

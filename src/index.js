import "./modules/style/style.css";

const createGameboard = require("./modules/dom-interactions/dom-gameboard");
const Ship = require("./modules/ship");

createGameboard();

console.log(Ship([1, 2], 5, "Y", [1, 2]));

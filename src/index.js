import createGameboard from "./modules/dom-interactions/dom-gameboard";
import showShipsOnBoard from "./modules/dom-interactions/place-ship";
import showRandomShipsOnBoard from "./modules/dom-interactions/place-ship-random";
import "./modules/style/style.css";

createGameboard();
showShipsOnBoard();
showRandomShipsOnBoard();
